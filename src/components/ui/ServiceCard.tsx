
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, features, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-8 h-full flex flex-col hover-lift",
        className
      )}
    >
      <div className="flex items-center mb-6">
        <div className="flex justify-center items-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
          <Icon className="w-6 h-6 teal-glow-text" />
        </div>
        <h3 className="ml-4 text-xl font-semibold text-black-visible">{title}</h3>
      </div>
      <p className="text-black-visible mb-6">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-black-visible">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
