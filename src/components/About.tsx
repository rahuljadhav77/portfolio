"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, Braces, TerminalSquare } from "lucide-react";

export default function About() {
  const { about, skills, certifications } = portfolioData;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <TerminalSquare className="text-neon-blue" />
            <span className="text-gradient">System.About</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="neu p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-neon-blue group-hover:bg-neon-purple transition-colors duration-500"></div>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                {about.short}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {about.detailed}
              </p>
            </div>

            <div className="mt-8 neu p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                 <Braces className="text-neon-purple" size={20} /> Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-neon-blue"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Code2 className="text-neon-blue" /> Tech Stack
            </h3>
            
            {Object.entries(skills).map(([category, items], i) => (
              <div key={category} className="neu-flat p-6 hover-glow transition-all">
                <h4 className="text-sm uppercase tracking-widest text-neon-purple mb-4">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 neu-chip text-gray-200 text-sm font-medium hover:text-neon-blue transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
