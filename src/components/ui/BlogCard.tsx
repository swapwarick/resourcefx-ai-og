
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  className?: string;
  style?: React.CSSProperties;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  imageSrc, 
  date, 
  category,
  author,
  className,
  style 
}: BlogCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden hover-lift transition-all duration-300",
        className
      )}
      style={style}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
            {category}
          </span>
          <span className="text-xs text-muted-foreground ml-3">
            {date}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center">
            {author.avatar ? (
              <img 
                src={author.avatar} 
                alt={author.name} 
                className="w-8 h-8 rounded-full mr-2 object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2">
                {author.name.charAt(0)}
              </div>
            )}
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <button className="flex items-center text-primary text-sm font-medium">
            <span className="mr-2">Read</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
