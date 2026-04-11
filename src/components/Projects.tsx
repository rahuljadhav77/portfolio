"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Network, DatabaseZap, FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Network className="text-neon-blue" />
            <span className="text-gradient">Distributed.Systems</span>
          </h2>
          <div className="w-24 h-1 bg-neon-blue rounded-full opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="neu-flat p-8 group hover:-translate-y-2 transition-all flex flex-col h-full neon-border"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue">
                  <DatabaseZap size={24} />
                </div>
                <div className="flex gap-3 text-gray-400">
                  <FolderGit2 className="hover:text-neon-purple cursor-pointer transition-colors" size={20} />
                  <ExternalLink className="hover:text-neon-blue cursor-pointer transition-colors" size={20} />
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-mono text-neon-purple uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs font-medium text-gray-300 neu-chip px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
