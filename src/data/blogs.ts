export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // paragraphs
  category: string;
  author: string;
  date: string; // display string e.g. "12 Jan, 2026"
  readTime: string; // e.g. "4 min read"
};

export const blogs: Blog[] = [
  {
    slug: "why-your-business-needs-a-website-in-2026",
    title: "Why Your Business Needs a Website in 2026",
    excerpt:
      "A website is no longer optional. Here's how a well-built site helps local businesses in Bhaktapur and beyond win more customers.",
    category: "Web Development",
    author: "Mithila Tech Team",
    date: "14 Jan, 2026",
    readTime: "4 min read",
    content: [
      "In today's market, your website is often the first interaction a customer has with your brand — before they ever call, visit, or message you. A slow, outdated, or missing website quietly costs you leads every single day.",
      "At Mithila Tech & IT Solutions, we've seen local businesses double their inquiries simply by moving from a basic Facebook page to a fast, mobile-friendly website with clear service pages and a working contact form.",
      "Beyond credibility, a website gives you full control over your message, your SEO, and your data — something a social media page can never fully offer.",
    ],
  },
  {
    slug: "digital-marketing-tips-for-small-businesses",
    title: "5 Digital Marketing Tips for Small Businesses in Nepal",
    excerpt:
      "Limited budget doesn't mean limited results. These five practical tips help small businesses grow their online presence affordably.",
    category: "Digital Marketing",
    author: "Mithila Tech Team",
    date: "02 Feb, 2026",
    readTime: "5 min read",
    content: [
      "Digital marketing can feel overwhelming for small business owners, but you don't need a massive budget to see real results — you need consistency and the right priorities.",
      "Start with Google Business Profile: it's free, and it's often the first thing local customers see when they search for your services.",
      "Next, invest in a simple content calendar for social media. Regular, useful posts build trust faster than occasional promotional content.",
      "Finally, track what's working. Even basic analytics tell you which channels are actually bringing in customers, so you can spend your time and money where it matters.",
    ],
  },
  {
    slug: "choosing-the-right-app-development-partner",
    title: "How to Choose the Right App Development Partner",
    excerpt:
      "Picking a development partner is a long-term decision. Here's what to look for before you sign a contract.",
    category: "App Development",
    author: "Mithila Tech Team",
    date: "20 Feb, 2026",
    readTime: "6 min read",
    content: [
      "Building an app is a significant investment, and the partner you choose can make or break the outcome. Look beyond price and portfolio — ask about their process, communication style, and post-launch support.",
      "A good partner asks questions about your business goals before jumping into design, and gives you realistic timelines rather than promises that sound too good to be true.",
      "Make sure ownership of the code, design files, and credentials is clearly defined in the contract, so you're never locked into one vendor.",
    ],
  },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getRelatedBlogs(slug: string, limit = 2): Blog[] {
  return blogs.filter((b) => b.slug !== slug).slice(0, limit);
}