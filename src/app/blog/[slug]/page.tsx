// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, CalendarDays, Clock, User, Loader2 } from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import axios from "axios";
import BlogDetailsContent from "@/components/BlogDetailsContent";

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// Blog API functions
const blogAPI = {
  getBySlug: async (slug) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/blogs/by_slug/?slug=${slug}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },
  
  getRelated: async (category, excludeId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/blogs/related/?category=${category}&exclude=${excludeId}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching related blogs:', error);
      return [];
    }
  },
};

// Transform API data to component format
const transformBlogData = (apiData) => {
  if (!apiData) return null;
  
  return {
    id: apiData.id,
    title: apiData.title,
    slug: apiData.slug,
    excerpt: apiData.excerpt,
    content: apiData.content,
    category: apiData.category || 'General',
    tags: apiData.tags ? apiData.tags.split(',') : [],
    date: apiData.published_at ? new Date(apiData.published_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : new Date(apiData.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: calculateReadTime(apiData.content || apiData.excerpt || ''),
    featured_image: apiData.featured_image,
    featured_image_url: apiData.featured_image_url,
    status: apiData.status,
    is_featured: apiData.is_featured,
    author: 'Mithila Tech Team', // Default author (you can add author field to model)
    meta_title: apiData.meta_title,
    meta_description: apiData.meta_description,
  };
};

// Transform related blogs
const transformRelatedData = (apiData) => {
  if (!apiData || !Array.isArray(apiData)) return [];
  
  return apiData.map(blog => ({
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    category: blog.category || 'General',
    date: blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }) : new Date(blog.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
  }));
};

// Calculate read time
const calculateReadTime = (content) => {
  if (!content) return '1 min read';
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

export default function BlogDetailsPage() {
  const params = useParams();
  const slug = params?.slug || 'digital-marketing-tips-for-small-businesses';
  
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  // Fetch blog data from API
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        setNotFound(false);
        
        // Fetch the blog by slug
        const data = await blogAPI.getBySlug(slug);
        
        if (!data) {
          setNotFound(true);
          return;
        }
        
        // Transform data to match component format
        const transformedData = transformBlogData(data);
        setBlog(transformedData);
        
        // Fetch related blogs (same category, excluding current)
        if (data.category) {
          const relatedData = await blogAPI.getRelated(data.slug, data.category, data.id);
          const transformedRelated = transformRelatedData(relatedData);
          setRelated(transformedRelated);
        }
        
      } catch (err) {
        console.error('Error loading blog:', err);
        setError('Failed to load blog post. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <article className="py-20 lg:py-28">
        <div className="container-px">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>
          <div className="mx-auto mt-20 max-w-3xl text-center">
            <Loader2 className="mx-auto h-12 w-12 animate-spin text-accent" />
            <p className="mt-4 text-muted">Loading blog post...</p>
          </div>
        </div>
      </article>
    );
  }

  // Not found state
  if (notFound) {
    notFound();
    return null;
  }

  // Error state
  if (error) {
    return (
      <article className="py-20 lg:py-28">
        <div className="container-px">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </Link>
          <div className="mx-auto mt-20 max-w-3xl text-center">
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-full bg-accent px-6 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent/80"
            >
              Retry
            </button>
          </div>
        </div>
      </article>
    );
  }

  // If no blog data
  if (!blog) {
    notFound();
    return null;
  }

  return (
    <article className="py-20 lg:py-28">
      <div className="container-px">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Blog
        </Link>

        <div className="mx-auto mt-6 max-w-3xl">
          <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-background">
            {blog.category}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {blog.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-accent" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-accent" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" />
              {blog.readTime}
            </span>
          </div>
        </div>

        {/* Cover */}
        <div className="relative mx-auto mt-10 aspect-[16/7] max-w-4xl overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-surface-2 to-black">
          {blog.featured_image_url ? (
            <img
              src={blog.featured_image_url}
              alt={blog.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="dot-grid absolute inset-0 opacity-20" />
          )}
        </div>

        <BlogDetailsContent content={blog.content} />

        {related.length > 0 && (
          <div className="mx-auto mt-20 max-w-3xl border-t border-white/8 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Keep Reading
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id || r.slug}
                  href={`/blogs/${r.slug}`}
                  className="group rounded-2xl border border-white/8 bg-surface-2/60 p-5 transition-colors hover:border-accent/40"
                >
                  <span className="text-[11px] font-semibold text-accent">
                    {r.category}
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-white transition-colors group-hover:text-accent sm:text-base">
                    {r.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted">{r.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}