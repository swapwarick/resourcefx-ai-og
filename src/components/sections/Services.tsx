import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";
import { BookOpen, Bot, Cpu, Headphones, Code, Activity } from "lucide-react";

interface ServicesProps {
  className?: string;
}

const servicesData = [
  {
    title: "RAG Applications",
    description: "Build powerful retrieval-augmented generation systems that leverage your organization's knowledge base for accurate, contextual AI responses.",
    icon: BookOpen,
    features: [
      "Document ingestion and processing",
      "Semantic search capabilities",
      "Custom knowledge retrieval",
      "Context-aware responses"
    ]
  },
  {
    title: "Agentic AI",
    description: "Develop autonomous AI agents that can perform complex tasks, make decisions, and provide valuable insights for your business operations.",
    icon: Cpu,
    features: [
      "Goal-oriented agents",
      "Task automation workflows",
      "Decision support systems",
      "Autonomous processing"
    ]
  },
  {
    title: "AI Agents",
    description: "Create specialized AI agents for specific business functions like customer service, sales support, content creation, and data analysis.",
    icon: Bot,
    features: [
      "Domain-specific training",
      "Process automation",
      "Integration with existing systems",
      "Continuous learning capabilities"
    ]
  },
  {
    title: "Voice Agents",
    description: "Implement natural-sounding voice interfaces that can understand, respond, and engage in meaningful conversations with your customers.",
    icon: Headphones,
    features: [
      "Natural language processing",
      "Voice synthesis and recognition",
      "Conversational AI design",
      "Multi-language support"
    ]
  },
  {
    title: "Custom AI Solutions",
    description: "Get tailored AI solutions designed specifically for your unique business challenges, integrating with your existing infrastructure.",
    icon: Code,
    features: [
      "Custom AI model development",
      "Legacy system integration",
      "Scalable architecture",
      "Enterprise-grade security"
    ]
  },
  {
    title: "Consulting & Support",
    description: "Receive expert guidance on AI strategy, implementation roadmaps, and ongoing technical support for your AI initiatives.",
    icon: Activity,
    features: [
      "AI readiness assessment",
      "Strategic planning",
      "Implementation guidance",
      "Ongoing monitoring & support"
    ]
  }
];

const Services = ({ className }: ServicesProps) => {
  return (
    <section 
      id="services" 
      className={cn(
        "py-20 bg-secondary/50",
        className
      )}
    >
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Our Services" 
          subtitle="We offer a comprehensive suite of AI solutions designed to help businesses innovate, automate, and grow. Each service is customizable to meet your specific needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              className={`animate-fade-in ${index % 2 === 0 ? 'orange-glow' : ''}`}
            />
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 glass-dark p-10 text-center max-w-4xl mx-auto animate-fade-in orange-glow">
          <h3 className="text-3xl font-bold mb-4">Ready to transform your business with AI?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're just starting your AI journey or looking to enhance existing systems, we have the expertise to help you succeed.
          </p>
          <a href="#contact" className="btn-primary orange-glow inline-flex items-center">
            <span>Schedule a Consultation</span>
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
