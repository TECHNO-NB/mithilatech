"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock, Loader2 } from "lucide-react";
import Link from "next/link";
import axios from "axios";

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// Blog API functions
const blogAPI = {
  // Get published blogs only
  getPublished: async (limit = 6) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/blogs/?status=published&limit=${limit}&ordering=-published_at`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },
  
  // Get all blogs (if needed)
  getAll: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/blogs/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },
  
  // Get blogs by category
  getByCategory: async (category) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/blogs/?category=${category}&status=published`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs by category:', error);
      throw error;
    }
  },
  
  // Get a single blog by slug
  getBySlug: async (slug) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/blogs/?slug=${slug}`);
      return response.data[0];
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },
};

// Transform API data to component format
const transformBlogData = (apiData) => {
  if (!apiData || !Array.isArray(apiData)) return [];
  
  return apiData.map((blog) => ({
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    content: blog.content,
    category: blog.category || 'General',
    tags: blog.tags ? blog.tags.split(',') : [],
    date: blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }) : new Date(blog.created_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    readTime: calculateReadTime(blog.content || blog.excerpt || ''),
    featured_image: blog.featured_image,
    featured_image_url: blog.featured_image_url,
    status: blog.status,
    is_featured: blog.is_featured,
    meta_title: blog.meta_title,
    meta_description: blog.meta_description,
  }));
};

// Calculate read time (average reading speed: 200 words per minute)
const calculateReadTime = (content) => {
  if (!content) return '1 min read';
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch only published blogs, limited to 6, ordered by published date
        const data = await blogAPI.getPublished(6);
        
        // Transform data to match component format
        const transformedData = transformBlogData(data);
        setBlogs(transformedData);
        
      } catch (err) {
        console.error('Error loading blogs:', err);
        setError('Failed to load blog posts. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section id="blogs" className="py-20 lg:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Blog
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Insights, Tips &amp; Updates
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Practical advice on web &amp; app development, digital marketing,
              and growing your business online — from the Mithila Tech team.
            </p>
          </div>
          <div className="mt-20 flex justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-accent" />
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="blogs" className="py-20 lg:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Blog
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Insights, Tips &amp; Updates
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Practical advice on web &amp; app development, digital marketing,
              and growing your business online — from the Mithila Tech team.
            </p>
          </div>
          <div className="mt-20 text-center">
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-full bg-accent px-6 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent/80"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  // If no blogs, show message
  if (blogs.length === 0) {
    return (
      <section id="blogs" className="py-20 lg:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Blog
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Insights, Tips &amp; Updates
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Practical advice on web &amp; app development, digital marketing,
              and growing your business online — from the Mithila Tech team.
            </p>
            <p className="mt-8 text-muted">No blog posts available yet. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Our Blog
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Insights, Tips &amp; Updates
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Practical advice on web &amp; app development, digital marketing,
            and growing your business online — from the Mithila Tech team.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id || blog.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface-2/60"
            >
              {/* Cover */}
              <Link
                href={`/blog/${blog.slug}`}
                aria-label={blog.title}
                className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface-2 to-black"
              >
                {blog.featured_image_url ? (
                  <img
                    src={blog.featured_image_url}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="dot-grid absolute inset-0 opacity-20" />
                )}
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-background">
                  {blog.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-[11px] text-muted">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-accent" />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold leading-snug text-white sm:text-lg">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {blog.title}
                  </Link>
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {blog.excerpt}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5"
                >
                  Read More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}