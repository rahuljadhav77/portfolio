"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, GraduationCap, Leaf, Users, Monitor, School, HandHeart } from "lucide-react";

const impactStats = [
  { icon: MapPin, value: "20+", label: "Towns Reached" },
  { icon: Users, value: "500+", label: "Lives Impacted" },
  { icon: GraduationCap, value: "50+", label: "Workshops Conducted" },
  { icon: Leaf, value: "3", label: "Focus Areas" },
];

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education & Mentorship",
    description: "Organized workshops and mentored underprivileged students in foundational computer science and career guidance across rural and semi-urban schools.",
  },
  {
    icon: Monitor,
    title: "Digital Literacy",
    description: "Led digital literacy drives teaching communities essential technology skills — from basic computing to safe internet usage and online tools adoption.",
  },
  {
    icon: Leaf,
    title: "Sustainability Initiatives",
    description: "Championed environmental awareness camps and tree plantation drives, promoting sustainable practices at the grassroots community level.",
  },
  {
    icon: School,
    title: "School Infrastructure Support",
    description: "Contributed to refurbishing classrooms, setting up computer labs, and improving learning environments for students in underserved areas.",
  },
];

export default function CommunityImpact() {
  return (
    <section id="community" className="py-24 relative bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Heart className="text-neon-purple" />
            <span className="text-gradient">Community.Impact</span>
          </h2>
          <div className="w-24 h-1 bg-neon-purple rounded-full opacity-50"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg">
            As a <span className="text-white font-medium">CSR Volunteer at Tata Consultancy Services</span>, I've worked across 20+ towns driving meaningful change through education, technology, and sustainability.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="neu p-6 text-center group hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neon-purple/10 mb-4 group-hover:bg-neon-purple/20 transition-colors">
                <stat.icon className="text-neon-purple" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="neu-flat p-8 group hover-glow transition-all relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-3 bg-neon-purple/10 rounded-lg text-neon-purple group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-colors">
                  <area.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full neu-inset text-sm text-gray-300">
            <HandHeart className="text-neon-purple" size={18} />
            <span>Engineering impact beyond code — one community at a time.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
