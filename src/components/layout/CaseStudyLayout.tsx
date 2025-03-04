
import { ArrowLeft, Clock, Tag, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CaseStudyLayoutProps {
  title: string;
  client: string;
  category: string;
  duration?: string;
  team?: string;
  outcome: string;
  heroImage: string;
  children: ReactNode;
  className?: string;
}

const CaseStudyLayout = ({ 
  title, 
  client, 
  category,
  duration,
  team,
  outcome,
  heroImage,
  children,
  className
}: CaseStudyLayoutProps) => {
  return (
    <div className={cn("pt-24 pb-20", className)}>
      {/* Back button */}
      <div className="container mx-auto px-6 mb-12">
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero section */}
      <div className="w-full h-[50vh] relative mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={heroImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <span className="text-primary font-medium">{client}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">{title}</h1>
              <div className="inline-flex items-center rounded-full bg-black/30 backdrop-blur-sm px-4 py-2 text-white text-sm">
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 text-black">Project Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-black">Client</h4>
                    <p className="text-black">{client}</p>
                  </div>
                </div>
                
                {duration && (
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-black">Duration</h4>
                      <p className="text-black">{duration}</p>
                    </div>
                  </div>
                )}
                
                {team && (
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium text-black">Team</h4>
                      <p className="text-black">{team}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <Trophy className="w-5 h-5 text-primary mt-1 mr-3 teal-glow-text" />
                  <div>
                    <h4 className="font-medium text-black">Outcome</h4>
                    <p className="text-black">{outcome}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-4 text-black">Need a similar solution?</h3>
              <p className="text-black mb-4">We can help you implement a customized AI solution for your specific needs.</p>
              <Link 
                to="/#contact"
                className="btn-primary teal-glow w-full text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLayout;
