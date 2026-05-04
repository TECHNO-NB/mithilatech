// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import GoldButton from "./GoldButton";
import { Plus, Save, Trash2, Upload } from "lucide-react";
import Card from "./Card";
import InputField from "./InputField";
import axios from "axios";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  short_description: string;
  content: string;
  image?: string;
  category?: string;
  tags?: string[];
  seo_meta_title?: string;
  seo_meta_description?: string;
  status?: string;
  created_at?: string;
}

const API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`,
});

export default function BlogsPanel({ addToast }) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [short_description, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState(""); // comma input
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDesc, setSeoDesc] = useState("");
  const [status, setStatus] = useState("draft");

  const [file, setFile] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [search, setSearch] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);

  // ─── Fetch Blogs ─────────────────────────
  const fetchBlogs = async () => {
    try {
      const { data } = await API.get("/blogs");
      setBlogs(data);
    } catch {
      addToast("Failed to load blogs", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ─── Create Blog ─────────────────────────
  const handleCreate = async () => {
    const token = localStorage.getItem("token");

    if (!title || !content || !short_description) {
      addToast("All fields required", "error");
      return;
    }

    setSubmitting(true);

    try {
      const fd = new FormData();

      fd.append("title", title);
      fd.append("short_description", short_description);
      fd.append("content", content);
      fd.append("category", category);
      fd.append("seo_meta_title", seoTitle);
      fd.append("seo_meta_description", seoDesc);
      fd.append("status", status);

      // convert tags → JSON array
      const tagArray = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      fd.append("tags", JSON.stringify(tagArray));

      if (file) fd.append("image", file);

      await API.post("/blogs", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      addToast("Blog created successfully!");

      // reset
      setTitle("");
      setShortDescription("");
      setContent("");
      setCategory("");
      setTags("");
      setSeoTitle("");
      setSeoDesc("");
      setStatus("draft");
      setFile(null);
      setShowForm(false);

      fetchBlogs();
    } catch {
      addToast("Failed to create blog", "error");
    } finally {
      setSubmitting(false);
    }
  };

  // ─── Delete Blog ─────────────────────────
  const handleDelete = async (id: number) => {
    const token = localStorage.getItem("token");

    if (!confirm("Delete this blog?")) return;

    try {
      await API.delete(`/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      addToast("Blog deleted");
      fetchBlogs();
    } catch {
      addToast("Delete failed", "error");
    }
  };

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h3 style={{ color: "#f0ead8" }}>Blog Posts</h3>
          <p style={{ color: "#5a5750", fontSize: 13 }}>
            {blogs.length} total posts
          </p>
        </div>

        <GoldButton onClick={() => setShowForm(!showForm)}>
          <Plus size={15} /> New Blog
        </GoldButton>
      </div>

      {/* Form */}
      {showForm && (
        <Card style={{ marginBottom: 24 }}>
          <h4 style={{ color: "#c9a84c" }}>Create Blog</h4>

          <InputField label="Title h1" value={title} onChange={setTitle} required />

          <InputField
            label="Short Description"
            value={short_description}
            onChange={setShortDescription}
            required
          />

          <InputField label="Category" value={category} onChange={setCategory} />

          <InputField
            label="Tags (comma separated)"
            value={tags}
            onChange={setTags}
          />

          <InputField
            label="SEO Meta Title"
            value={seoTitle}
            onChange={setSeoTitle}
          />

          <InputField
            label="SEO Meta Description"
            value={seoDesc}
            onChange={setSeoDesc}
          />

          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{ marginBottom: 16 }}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>

          {/* Markdown Editor */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: "#787470", fontSize: 12 }}>Content</label>
            <SimpleMDE value={content} onChange={setContent} />
          </div>

          {/* Image Upload */}
          <div style={{ marginBottom: 16 }}>
            <div
              onClick={() => fileRef.current?.click()}
              style={{
                border: "2px dashed #26262a",
                padding: 20,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Upload size={20} />
              <p>{file ? file.name : "Upload Image"}</p>
            </div>

            <input
              ref={fileRef}
              type="file"
              hidden
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            {file && (
              <img
                src={URL.createObjectURL(file)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  maxHeight: 200,
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          <GoldButton onClick={handleCreate} disabled={submitting}>
            <Save size={15} />
            {submitting ? "Saving..." : "Save Blog"}
          </GoldButton>
        </Card>
      )}

      {/* Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        style={{ marginBottom: 20 }}
      />

      {/* List */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        filtered.map((blog) => (
          <Card key={blog.id}>
            <img className="w-50" src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`} />
            <h4>{blog.title}</h4>
            <p>{blog.short_description}</p>
            <p>{blog.content.slice(0, 100)}...</p>

            <GoldButton
              variant="danger"
              onClick={() => handleDelete(blog.id)}
            >
              <Trash2 size={14} />
            </GoldButton>
          </Card>
        ))
      )}
    </div>
  );
}