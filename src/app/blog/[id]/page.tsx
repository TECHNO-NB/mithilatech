// @ts-nocheck
"use client";
import Image from 'next/image';
import "../../App.css"

const BlogPost = () => {
  const BLOG = {
    title: "Why Every Nepali Business Needs a Website in 2024",
    date: "Dec 15, 2024",
    read: "5 min read",
    tag: "Web Dev",
    // Changed w=400 to w=1200 in the URL for a crisper, high-quality image
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", 
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center py-10 mt-50 px-6 md:px-12 bg-slate-950 text-slate-100" style={{paddingTop:"120px"}}>
      
      <article className="max-w-3xl w-full flex flex-col items-center gap-8">
        
        {/* Category Tag */}
        <span className="px-4 py-1.5 text-xs md:text-sm font-semibold tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full uppercase">
          {BLOG.tag}
        </span>

        {/* Blog Title */}
        <h1 className="glow-text text-4xl md:text-4xl lg:text-4xl font-extrabold text-center leading-tight tracking-tight">
          {BLOG.title}
        </h1>

        {/* Metadata (Date & Read Time) */}
        <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
          <time className="glass px-4 py-1.5 rounded-lg border border-white/10">
            {BLOG.date}
          </time>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
          <span className="glass px-4 py-1.5 rounded-lg border border-white/10">
            {BLOG.read}
          </span>
        </div>

        {/* Featured Image */}
        <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mt-4 group">
          <Image 
            src={BLOG.img} 
            width={1200} 
            height={600} 
            className="w-full h-75 md:h-112.5 object-cover transition-transform duration-700 group-hover:scale-105" 
            alt={BLOG.title}
            priority 
          />
        </div>
        
        {/* Blog Content */}
        <div className="w-full mt-6 space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel explicabo, ullam repellendus, mollitia commodi dicta dolorum asperiores placeat eligendi eveniet suscipit vitae voluptatem provident quaerat illo aliquam molestias quisquam deserunt.
          </p>
          <p>
            In today's digital age, establishing a strong online presence is no longer just an option for businesses in Nepal—it's a necessity. From bustling tech hubs in Kathmandu to emerging markets across the country, connecting with your audience digitally unlocks unprecedented growth.
          </p>
        </div>

      </article>
    </main>
  );
}

export default BlogPost;