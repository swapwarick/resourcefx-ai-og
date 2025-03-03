
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Nexus<span className="text-primary">AI</span>
            </h3>
            <p className="text-muted mb-6 text-sm">
              Pioneering the future of AI solutions for businesses of all sizes. 
              From RAG applications to Voice Agents, we're your partner in AI innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-muted hover:text-white transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "RAG Applications", 
                "Agentic AI", 
                "AI Agents", 
                "Voice Agents", 
                "Custom AI Solutions",
                "Consulting"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-muted hover:text-white transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted">
                <span className="block font-medium text-white mb-1">Address</span>
                123 AI Boulevard, Tech City, CA 94107
              </li>
              <li className="text-sm text-muted">
                <span className="block font-medium text-white mb-1">Email</span>
                info@nexusai.com
              </li>
              <li className="text-sm text-muted">
                <span className="block font-medium text-white mb-1">Phone</span>
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted mb-4 md:mb-0">
            © {currentYear} NexusAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted hover:text-white transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
