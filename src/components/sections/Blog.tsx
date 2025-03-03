
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import BlogCard from "../ui/BlogCard";
import { Search } from "lucide-react";

interface BlogProps {
  className?: string;
}

const blogData = [
  {
    title: "Understanding RAG: The Future of Knowledge Retrieval",
    excerpt: "Explore how Retrieval-Augmented Generation is revolutionizing the way AI systems access and utilize information for more accurate and contextual responses.",
    imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=500&auto=format&fit=crop",
    date: "June 15, 2023",
    category: "RAG Applications",
    author: {
      name: "Dr. Priya Patel",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
    }
  },
  {
    title: "Voice Agents: Creating Natural Conversational Experiences",
    excerpt: "Learn about the latest advancements in voice technology and how businesses are implementing voice agents to enhance customer interactions.",
    imageSrc: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=500&auto=format&fit=crop",
    date: "July 22, 2023",
    category: "Voice Agents",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop"
    }
  },
  {
    title: "The Rise of Autonomous AI Agents in Business Operations",
    excerpt: "Discover how autonomous AI agents are transforming business processes by automating complex tasks and making intelligent decisions.",
    imageSrc: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=500&auto=format&fit=crop",
    date: "August 8, 2023",
    category: "Agentic AI",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
    }
  },
  {
    title: "Developing an AI Strategy for Your Organization",
    excerpt: "A comprehensive guide to creating an effective AI strategy that aligns with your business goals and delivers measurable results.",
    imageSrc: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=500&auto=format&fit=crop",
    date: "September 4, 2023",
    category: "Consulting",
    author: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
    }
  },
  {
    title: "The Ethics of AI: Responsible Development Practices",
    excerpt: "An exploration of ethical considerations in AI development and how organizations can ensure their AI systems are transparent, fair, and accountable.",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=500&auto=format&fit=crop",
    date: "October 12, 2023",
    category: "AI Ethics",
    author: {
      name: "Dr. Priya Patel",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
    }
  },
  {
    title: "Integrating AI with Legacy Systems: A Practical Approach",
    excerpt: "Practical strategies for integrating modern AI capabilities with existing legacy systems to maximize ROI without complete infrastructure overhauls.",
    imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop",
    date: "November 30, 2023",
    category: "Integration",
    author: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop"
    }
  }
];

const Blog = ({ className }: BlogProps) => {
  return (
    <section 
      id="blog" 
      className={cn(
        "py-20 bg-muted/20",
        className
      )}
    >
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="AI Insights Blog" 
          subtitle="Stay updated with the latest trends, technologies, and best practices in the world of artificial intelligence."
        />
        
        {/* Search and Filters */}
        <div className="mb-12 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-5 py-3 pl-12 pr-4 rounded-full border border-muted bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              <Search className="w-5 h-5" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {["All Topics", "RAG", "Agentic AI", "Voice Agents", "AI Ethics", "Integration", "Strategy"].map((category, index) => (
              <button
                key={index}
                className={cn(
                  "px-3 py-1 rounded-full text-sm transition-all duration-300",
                  index === 0
                    ? "bg-primary/10 text-primary"
                    : "bg-transparent hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogCard 
              key={index}
              {...post}
              className="animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            />
          ))}
        </div>
        
        {/* View All */}
        <div className="text-center mt-12">
          <button className="btn-secondary inline-flex items-center">
            <span>View All Articles</span>
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Newsletter */}
        <div className="mt-20 glass-card p-10 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground">Get the latest insights on AI technology delivered to your inbox.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
