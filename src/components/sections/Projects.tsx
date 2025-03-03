
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { useState } from "react";

interface ProjectsProps {
  className?: string;
}

const projectsData = [
  {
    title: "Intelligent Customer Support System",
    description: "An AI-powered customer support system that handles inquiries, troubleshoots issues, and escalates complex problems to human agents.",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop",
    clientName: "Global Retail Corp",
    outcome: "Reduced response time by 75% and increased customer satisfaction by 40%",
    category: "Voice Agents"
  },
  {
    title: "Knowledge Retrieval System",
    description: "A comprehensive RAG system that enables employees to quickly access and utilize the company's vast knowledge base.",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=500&auto=format&fit=crop",
    clientName: "Legal Services International",
    outcome: "Improved research efficiency by 5x and reduced time-to-insight by 60%",
    category: "RAG Applications"
  },
  {
    title: "Autonomous Content Creation Agent",
    description: "An AI agent that creates, optimizes, and publishes marketing content across multiple channels with minimal human oversight.",
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop",
    clientName: "MediaMax Agency",
    outcome: "Increased content output by 300% while maintaining quality standards",
    category: "AI Agents"
  },
  {
    title: "Financial Analysis Assistant",
    description: "An intelligent system that analyzes financial data, identifies patterns, and provides actionable recommendations for investment strategies.",
    imageSrc: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=500&auto=format&fit=crop",
    clientName: "Investment Partners LLC",
    outcome: "Improved portfolio performance by 12% year-over-year",
    category: "Agentic AI"
  },
  {
    title: "Healthcare Diagnostic Support System",
    description: "A custom AI solution that assists medical professionals in diagnosing conditions based on patient data and medical records.",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop",
    clientName: "National Health Network",
    outcome: "Reduced diagnostic time by 35% and improved accuracy by 22%",
    category: "Custom AI Solutions"
  },
  {
    title: "AI Strategy & Implementation",
    description: "Comprehensive consulting services to develop an enterprise-wide AI strategy and implementation roadmap.",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop",
    clientName: "Manufacturing Innovations Inc",
    outcome: "Successfully deployed 5 AI initiatives that delivered $2.3M in annual savings",
    category: "Consulting & Support"
  }
];

const categories = [
  "All",
  "RAG Applications",
  "Agentic AI",
  "AI Agents",
  "Voice Agents",
  "Custom AI Solutions",
  "Consulting & Support"
];

const Projects = ({ className }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  return (
    <section 
      id="projects" 
      className={cn(
        "py-20 relative clip-diagonal-reverse",
        className
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Our Projects" 
          subtitle="Explore our portfolio of successful AI implementations across various industries and use cases."
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-white hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-muted"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            />
          ))}
        </div>
        
        {/* Client Logos */}
        <div className="mt-20">
          <p className="text-center text-muted-foreground mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="bg-muted-foreground/30 h-10 w-32 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
