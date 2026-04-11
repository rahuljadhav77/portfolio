import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CommunityImpact from "@/components/CommunityImpact";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-bg text-white">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <CommunityImpact />
      <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-white/5 bg-dark-bg">
        <p>Engineered by <span className="text-neon-blue font-medium">Rahul Jadhav</span> &copy; {new Date().getFullYear()}</p>
        <p className="mt-2 text-xs opacity-50">System architecture and portfolio designed for high performance.</p>
      </footer>
    </>
  );
}
