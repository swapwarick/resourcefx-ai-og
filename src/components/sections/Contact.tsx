
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <section 
      id="contact" 
      className={cn(
        "py-20 relative",
        className
      )}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-muted/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Have a question or ready to start your AI journey? Contact us today for a consultation with our expert team."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Office Location</h4>
                  <p className="text-muted-foreground">
                    123 AI Boulevard<br />
                    Tech City, CA 94107<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <p className="text-muted-foreground">
                    info@nexusai.com<br />
                    support@nexusai.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden h-64 bg-muted border border-muted">
              <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                <span>Google Maps Embedded Location</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  placeholder="Company Name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium mb-1">Service Interested In</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="rag">RAG Applications</option>
                  <option value="agentic">Agentic AI</option>
                  <option value="agents">AI Agents</option>
                  <option value="voice">Voice Agents</option>
                  <option value="custom">Custom AI Solutions</option>
                  <option value="consulting">Consulting & Support</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            {[
              {
                question: "What industries do you serve?",
                answer: "We work with clients across various industries including healthcare, finance, legal, retail, manufacturing, and technology. Our AI solutions are tailored to each industry's specific needs and challenges."
              },
              {
                question: "How long does it take to implement an AI solution?",
                answer: "Implementation timelines vary based on the complexity of the solution and your organization's readiness. Simple AI implementations can take 4-6 weeks, while more complex, enterprise-wide solutions may take 3-6 months."
              },
              {
                question: "Do I need a large dataset to implement AI?",
                answer: "Not necessarily. While having quality data is beneficial, we can work with organizations at various stages of data maturity. For some solutions, we can leverage transfer learning and pre-trained models to minimize data requirements."
              },
              {
                question: "How do you ensure the security and privacy of our data?",
                answer: "We implement industry-standard security practices including encryption, access controls, and regular security audits. We also work within your existing security frameworks and can deploy solutions on-premises or in your private cloud if required."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="glass-card p-6 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h4 className="text-lg font-medium mb-2">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
