
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";
import { BookOpen, Database, Lightbulb, Milestone, BarChart, Palette, Book, Layers } from "lucide-react";

const AutonomousContentCreation = () => {
  return (
    <CaseStudyLayout
      title="Autonomous Content Creation Agent"
      client="MediaMax Agency"
      category="AI Agents"
      duration="4 months"
      team="2 AI Engineers, 1 Content Strategist"
      outcome="Increased content output by 300% while maintaining quality standards"
      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
    >
      <h2 className="text-white">The Challenge</h2>
      <p className="text-white">
        MediaMax Agency, a leading digital marketing agency, was struggling to meet the growing demand for content across multiple platforms for their diverse client base. Their team of content creators was overwhelmed, and the agency faced challenges in scaling their operations while maintaining content quality and brand consistency.
      </p>
      
      <ul className="text-white">
        <li>The agency needed to produce 5x more content to meet client demands</li>
        <li>Manual content creation processes were time-consuming and inconsistent</li>
        <li>Content had to maintain brand voice across multiple channels and formats</li>
        <li>Limited resources for extensive content research and optimization</li>
      </ul>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">48</h3>
          <p className="text-white">New clients onboarded</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">12</h3>
          <p className="text-white">Content formats automated</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <BarChart className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">300%</h3>
          <p className="text-white">Increase in content output</p>
        </div>
      </div>

      <h2 className="text-white">Our Approach</h2>
      <p className="text-white">
        We developed an autonomous content creation agent that could generate, optimize, and publish content with minimal human oversight. Our solution was designed to understand brand guidelines, research topics intelligently, and adapt content to different platforms and formats.
      </p>

      <div className="my-8 space-y-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Milestone className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Brand Voice Analysis</h3>
            <p className="text-white">
              We developed a system that could analyze existing content to understand and replicate brand voice, tone, and style guidelines for each client.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Autonomous Research Engine</h3>
            <p className="text-white">
              The agent was equipped with advanced research capabilities to gather relevant information, statistics, and trends to inform content creation.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Multi-Format Adaptation</h3>
            <p className="text-white">
              We built a system that could adapt content for different platforms (social media, blogs, newsletters) while maintaining consistent messaging.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-white">Implementation</h2>
      <p className="text-white">
        Our implementation process focused on creating a scalable and flexible content creation system that could operate with minimal oversight while delivering high-quality results.
      </p>
      
      <ol className="text-white">
        <li>
          <strong>Phase 1:</strong> We developed the brand voice analysis module and trained it on existing client content.
        </li>
        <li>
          <strong>Phase 2:</strong> We built the autonomous research engine to gather relevant information and insights.
        </li>
        <li>
          <strong>Phase 3:</strong> We implemented the multi-format adaptation system to optimize content for different platforms.
        </li>
        <li>
          <strong>Phase 4:</strong> We integrated with publishing platforms and scheduling tools for end-to-end automation.
        </li>
      </ol>

      <img 
        src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000&auto=format&fit=crop"
        alt="Content creation workflow"
        className="my-10 rounded-xl w-full h-auto shadow-xl"
      />

      <h2 className="text-white">Results & Impact</h2>
      <p className="text-white">
        The autonomous content creation agent transformed MediaMax Agency's operations, enabling them to scale their content production while improving quality and consistency.
      </p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Quantitative Results</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">300% increase in content production capacity</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">85% reduction in content creation time</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">40% improvement in engagement metrics across channels</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Client satisfaction increased by 64%</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Qualitative Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Content team freed to focus on strategic initiatives</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Consistent brand voice across all content types</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Ability to quickly adapt to trending topics and news</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">More targeted and research-backed content creation</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-white">Future Developments</h2>
      <p className="text-white">
        Based on the success of this implementation, MediaMax Agency is planning several enhancements to their autonomous content creation system.
      </p>
      
      <ul className="text-white">
        <li>Integration of real-time analytics to further optimize content performance</li>
        <li>Expansion to additional content formats, including video script generation</li>
        <li>Development of client-specific customization options for greater content personalization</li>
        <li>Implementation of content strategy recommendations based on performance data</li>
      </ul>
    </CaseStudyLayout>
  );
};

export default AutonomousContentCreation;
