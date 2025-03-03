
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  className,
  subtitleClassName
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      centered && "text-center",
      className
    )}>
      <div className="flex items-center justify-center mb-4">
        <div className="h-px w-8 bg-primary mr-3 opacity-80"></div>
        <span className="text-sm uppercase tracking-widest text-primary font-medium">
          {title.split(' ')[0]}
        </span>
      </div>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={cn("section-subtitle", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
