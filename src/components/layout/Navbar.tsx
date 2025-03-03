
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur",
        isScrolled 
          ? "py-3 bg-background/80 shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="font-bold text-xl md:text-2xl text-foreground">
          Nexus<span className="text-primary">AI</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link",
                activeSection === link.href.substring(1) && "nav-link-active"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-sm ml-4"
          >
            Get Started
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-[57px] bg-background z-40 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        )}
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg py-2 border-b border-border",
                activeSection === link.href.substring(1) 
                  ? "text-primary border-primary" 
                  : "text-muted-foreground"
              )}
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary text-center mt-6"
            onClick={closeMobileMenu}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
