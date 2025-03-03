
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import TeamMember from "../ui/TeamMember";
import { Facebook, Linkedin, Twitter } from "lucide-react";

interface AboutProps {
  className?: string;
}

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & AI Strategist",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    bio: "Former Google AI researcher with 15+ years experience leading tech innovation.",
    socialLinks: [
      {
        platform: "twitter",
        url: "#",
        icon: <Twitter className="w-4 h-4" />
      },
      {
        platform: "linkedin",
        url: "#",
        icon: <Linkedin className="w-4 h-4" />
      }
    ]
  },
  {
    name: "Michael Chen",
    role: "CTO & Lead Engineer",
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
    bio: "AI systems architect specializing in LLMs and conversational agents.",
    socialLinks: [
      {
        platform: "linkedin",
        url: "#",
        icon: <Linkedin className="w-4 h-4" />
      },
      {
        platform: "facebook",
        url: "#",
        icon: <Facebook className="w-4 h-4" />
      }
    ]
  },
  {
    name: "Priya Patel",
    role: "Head of AI Research",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
    bio: "PhD in Machine Learning with expertise in RAG and knowledge retrieval systems.",
    socialLinks: [
      {
        platform: "twitter",
        url: "#",
        icon: <Twitter className="w-4 h-4" />
      },
      {
        platform: "linkedin",
        url: "#",
        icon: <Linkedin className="w-4 h-4" />
      }
    ]
  },
  {
    name: "David Wilson",
    role: "VP of Client Solutions",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    bio: "Business strategist helping enterprises implement AI solutions that drive results.",
    socialLinks: [
      {
        platform: "linkedin",
        url: "#",
        icon: <Linkedin className="w-4 h-4" />
      }
    ]
  }
];

const testimonials = [
  {
    quote: "ResourceFX AI transformed our customer service with their Voice Agents. The implementation was smooth, and we've seen a 40% increase in customer satisfaction scores.",
    name: "Jennifer Reyes",
    title: "CTO, GloboTech Solutions",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Their RAG implementation helped our research team access critical information 5x faster. The custom knowledge base they built is a game-changer for our operations.",
    name: "Marcus Lee",
    title: "Research Director, MediNova",
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Working with ResourceFX AI on our AI strategy provided clarity and direction. Their team's expertise is unmatched, and they delivered beyond our expectations.",
    name: "Sophia Rodriguez",
    title: "CEO, Fintech Innovations",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  }
];

const About = ({ className }: AboutProps) => {
  return (
    <section 
      id="about" 
      className={cn(
        "py-20 relative",
        className
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About ResourceFX AI" 
          subtitle="We're a team of AI specialists, engineers, and business strategists on a mission to make artificial intelligence accessible and impactful for businesses of all sizes."
        />
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <div className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To democratize cutting-edge AI technology by creating solutions that are powerful, ethical, and accessible to businesses of all sizes, enabling them to innovate and thrive in a rapidly evolving digital landscape.
            </p>
            <ul className="space-y-2">
              {["Client-focused solutions", "Ethical AI development", "Continuous innovation", "Business-driven results"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground mb-6">
              To become the global leader in practical AI implementation, known for creating intelligent solutions that solve real-world business challenges while advancing the capabilities of artificial intelligence.
            </p>
            <ul className="space-y-2">
              {["AI that enhances human potential", "Sustainable technology adoption", "Industry-specific expertise", "Long-term client partnerships"].map((item, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-20">
          <SectionHeading 
            title="Meet Our Team" 
            subtitle="Our diverse team brings together expertise from artificial intelligence, engineering, business strategy, and user experience design."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember 
                key={index}
                {...member}
                className={`animate-fade-in delay-[${0.2 * index}s]`}
              />
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div>
          <SectionHeading 
            title="Client Testimonials" 
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with ResourceFX AI."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`glass-card p-8 flex flex-col animate-fade-in delay-[${0.2 * index}s]`}
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center">
                  <img 
                    src={testimonial.imageSrc} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
