"use client"
import { motion } from "framer-motion";
export function PerspectiveText({
    children,
    hover,
  }: {
    children: string;
    hover?: boolean;
  }) {
    return (
      <motion.div className="relative overflow-hidden whitespace-pre">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: hover ? "-100%" : 0 }}
          layout
          transition={{ delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="py-2"
        >
          {children}
        </motion.div>
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: hover ? 0 : "100%" }}
          layout
          transition={{ delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          className="absolute left-0 top-0 py-2"
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }