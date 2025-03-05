
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>ResourceFX AI - Leading AI Agency for Enterprise Solutions</title>
        <meta name="description" content="ResourceFX AI is a premier AI agency specializing in RAG applications, Agentic AI, voice agents, and custom AI solutions that drive business transformation." />
        <meta name="keywords" content="AI agency, RAG applications, agentic AI, voice agents, enterprise AI, AI consulting, artificial intelligence" />
        <link rel="canonical" href="https://resourcefx.ai/" />
        
        {/* Schema.org markup for homepage */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://resourcefx.ai/",
            "name": "ResourceFX AI",
            "description": "Leading AI agency specializing in RAG applications, Agentic AI, AI agents, Voice Agents, and custom AI solutions."
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-all duration-300 opacity-80 hover:opacity-100 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M12 5L12 19M12 5L18 11M12 5L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
