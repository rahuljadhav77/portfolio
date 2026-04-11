"use client";

import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neu p-12 md:p-16 neon-border relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple"></div>
          
          <Terminal className="mx-auto text-neon-blue mb-6" size={48} />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Scale?
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.closing} Currently open for new opportunities to architect reliable and distributed systems.
          </p>

          <a 
            href="https://www.linkedin.com/in/rahul-s-jadhav" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Send size={20} /> Initialize Handshake
          </a>
        </motion.div>
      </div>
    </section>
  );
}
