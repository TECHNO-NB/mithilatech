"use client";

import { motion } from "framer-motion";

export default function BlogDetailsContent({ content }: { content: string[] }) {
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-5">
      {content.map((paragraph, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="text-sm leading-relaxed text-muted sm:text-base"
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
}