"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Server, Database, Cloud, Terminal } from "lucide-react";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-neon-purple rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full neu-inset mb-8 text-neon-blue text-sm font-medium tracking-wider"
          >
            <Terminal size={16} /> SYSTEM STATUS: ONLINE
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">{hero.name}</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-400 mb-8 font-light">
            {hero.role}
          </h2>

          <div className="h-20 mb-8">
             <p className="text-xl md:text-2xl font-medium text-gray-300">
                {hero.taglines[0]}
             </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#projects" className="px-8 py-4 bg-transparent neon-border text-neon-blue rounded-lg font-semibold hover-glow transition-all flex items-center gap-2">
              <Server size={20} /> View Architecture
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all flex items-center gap-2">
              <Cloud size={20} /> Initialize Connection
            </a>
          </div>
        </motion.div>

        {/* System Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
        >
          {[
            { label: "Systems Engineered", value: "Enterprise", icon: Database },
            { label: "Uptime Focus", value: "99.99%", icon: Server },
            { label: "Experience", value: "5+ Years", icon: Cloud },
          ].map((metric, i) => (
            <div key={i} className="neu p-6 flex flex-col items-center text-center">
              <metric.icon className="text-neon-purple mb-4" size={32} />
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
