
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section 
      id="home" 
      className={cn(
        "min-h-screen flex items-center justify-center relative overflow-hidden",
        className
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container px-6 py-12 mx-auto text-center">
        <div className="animate-slide-down" style={{ animationDelay: "0.2s" }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary">
            Next-Generation AI Solutions
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 animate-slide-down" style={{ animationDelay: "0.4s" }}>
          Transforming Business <br className="hidden md:block" />
          <span className="text-gradient">Through Intelligent AI</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 animate-slide-down" style={{ animationDelay: "0.6s" }}>
          We build cutting-edge AI solutions that drive innovation and growth. From RAG applications to Voice Agents, our expertise helps businesses thrive in the AI era.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-down" style={{ animationDelay: "0.8s" }}>
          <a href="#contact" className="btn-primary flex items-center">
            <span>Get Started</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a href="#services" className="btn-secondary flex items-center">
            <span>Explore Services</span>
          </a>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative max-w-4xl mx-auto animate-slide-down" style={{ animationDelay: "1s" }}>
          <div className="glass-card overflow-hidden rounded-xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1680693781384-9539a1bccef2?q=80&w=1200&auto=format&fit=crop" 
              alt="AI-powered data visualization" 
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="text-sm font-medium">Intelligent AI solutions for modern businesses</span>
            </div>
          </div>
          
          {/* Floating cards */}
          <div className="absolute -top-6 -right-6 w-48 glass-card p-4 opacity-90 hidden md:block animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary mr-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium">Performance</p>
                <p className="text-xs text-muted-foreground">+147% Increase</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-6 w-48 glass-card p-4 opacity-90 hidden md:block animate-float" style={{ animationDelay: "2s" }}>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-accent mr-3">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21H8C5.79086 21 4 19.2091 4 17C4 14.7909 5.79086 13 8 13H16C18.2091 13 20 14.7909 20 17C20 19.2091 18.2091 21 16 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium">New Users</p>
                <p className="text-xs text-muted-foreground">2,345 This Month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Clients */}
        <div className="mt-20 animate-slide-down" style={{ animationDelay: "1.2s" }}>
          <p className="text-sm text-muted-foreground mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="bg-muted-foreground/30 h-6 w-24 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
