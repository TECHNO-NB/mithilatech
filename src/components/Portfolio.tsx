"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import axios from "axios";

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// Portfolio API functions
const portfolioAPI = {
  // Get only 10 portfolio items
  getLimited: async (limit = 10) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/portfolio-items/?limit=${limit}&ordering=order`);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      throw error;
    }
  },
  
  // Get all portfolio items (if needed)
  getAll: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/portfolio-items/`);
      return response.data;
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      throw error;
    }
  },
};

// Transform API data to component format
const transformPortfolioData = (apiData) => {
  if (!apiData || !Array.isArray(apiData)) return [];
  
  return apiData.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category.charAt(0).toUpperCase() + item.category.slice(1).replace('_', ' '),
    gradient: `${item.gradient_start} ${item.gradient_end} ${item.gradient_angle}deg`,
    description: item.description,
    thumbnail: item.thumbnail,
    thumbnail_url: item.thumbnail_url,
    url: item.url,
    github_url: item.github_url,
    technologies: item.technologies ? item.technologies.split(',') : [],
    is_featured: item.is_featured,
    order: item.order,
  }));
};

// Get unique categories from data
const getCategoriesFromData = (data) => {
  if (!data || !Array.isArray(data)) return ['All'];
  
  const categories = data
    .map(item => item.category)
    .filter(category => category && category !== 'all')
    .map(category => category.charAt(0).toUpperCase() + category.slice(1).replace('_', ' '));
  
  return ['All', ...new Set(categories)];
};

// Filter portfolio items by category
const filterPortfolioByCategory = (data, category) => {
  if (!data || !Array.isArray(data)) return [];
  
  if (category === 'All') return data;
  
  const categoryMap = {
    'Websites': 'websites',
    'Mobile Apps': 'mobile_apps',
    'Branding': 'branding',
    'Digital Marketing': 'digital_marketing',
  };
  
  const categoryValue = categoryMap[category] || category.toLowerCase();
  return data.filter(item => 
    item.category && item.category.toLowerCase() === categoryValue.toLowerCase()
  );
};

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(["All"]);
  const scrollerRef = useRef(null);

  // Fetch portfolio data from API - only 10 items
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch only 10 portfolio items from API
        const data = await portfolioAPI.getLimited(10);
        
        // Transform data to match component format
        const transformedData = transformPortfolioData(data);
        setAllItems(transformedData);
        
        // Extract unique categories for filters
        const categories = getCategoriesFromData(transformedData);
        setFilters(categories);
        
      } catch (err) {
        console.error('Error loading portfolio:', err);
        setError('Failed to load portfolio items. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Filter items based on active category
  const filteredItems = filterPortfolioByCategory(allItems, active);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  // Loading state
  if (loading) {
    return (
      <section id="portfolio" className="py-20 lg:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Our Recent Projects
            </h2>
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
      <section id="portfolio" className="py-20 lg:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Our Recent Projects
            </h2>
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

  // If no items, show message
  if (allItems.length === 0) {
    return (
      <section id="portfolio" className="py-20 lg:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Our Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Our Recent Projects
            </h2>
            <p className="mt-8 text-muted">No portfolio items available yet.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 lg:py-28">
      <div className="container-px">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Our Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Our Recent Projects
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                active === filter
                  ? "bg-accent text-background"
                  : "border border-white/10 text-neutral-300 hover:border-accent/40 hover:text-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-surface text-white hover:border-accent hover:text-accent lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {(filteredItems.length > 0 ? filteredItems : allItems).map((item, i) => (
              <motion.div
                key={item.id || item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group w-[75%] shrink-0 snap-start sm:w-[46%] lg:w-[30%]"
              >
                <div 
                  className="aspect-[4/3] overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.02] relative"
                  style={{ 
                    background: item.gradient || 'linear-gradient(135deg, #FF6B6B, #4ECDC4)'
                  }}
                >
                  {item.thumbnail_url ? (
                    <img 
                      src={item.thumbnail_url} 
                      alt={item.title}
                      className="h-full w-full object-cover mix-blend-overlay"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-white/30 text-4xl font-bold">
                      {item.title.charAt(0)}
                    </div>
                  )}
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <p className="text-xs font-medium uppercase tracking-wider text-accent">
                        View Project
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-muted">{item.category}</p>
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {item.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[10px] text-muted/60">
                          {tech.trim()}{idx < Math.min(item.technologies.length, 3) - 1 ? ',' : ''}
                        </span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="text-[10px] text-muted/60">+{item.technologies.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-surface text-white hover:border-accent hover:text-accent lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Item count */}
        <div className="mt-6 text-center text-sm text-muted">
          Showing {filteredItems.length} of {allItems.length} projects
        </div>
      </div>
    </section>
  );
}