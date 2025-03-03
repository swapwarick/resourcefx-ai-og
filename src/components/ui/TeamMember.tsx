
import { cn } from "@/lib/utils";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  bio: string;
  socialLinks?: SocialLink[];
  className?: string;
}

const TeamMember = ({ 
  name, 
  role, 
  imageSrc, 
  bio,
  socialLinks,
  className 
}: TeamMemberProps) => {
  return (
    <div 
      className={cn(
        "glass-card overflow-hidden hover-lift transition-all duration-300",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black-visible">{name}</h3>
        <p className="text-primary font-medium text-sm mb-3">{role}</p>
        <p className="text-black-visible text-sm mb-4">
          {bio}
        </p>
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex items-center space-x-3 mt-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
