
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  clientName?: string;
  outcome?: string;
  className?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  clientName, 
  outcome,
  className 
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden group hover-lift transition-all duration-300",
        className
      )}
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        {clientName && (
          <span className="text-sm text-primary font-medium mb-2 block">
            {clientName}
          </span>
        )}
        <h3 className="text-xl font-semibold mb-3 text-black-visible">{title}</h3>
        <p className="text-black-visible text-sm mb-4">
          {description}
        </p>
        {outcome && (
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-sm font-medium text-black-visible">Outcome:</p>
            <p className="text-sm text-black-visible">{outcome}</p>
          </div>
        )}
        <div className="mt-6 flex justify-end">
          <button className="flex items-center text-primary text-sm font-medium">
            <span className="mr-2">View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
