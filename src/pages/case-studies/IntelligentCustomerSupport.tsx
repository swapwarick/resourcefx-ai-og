
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";
import { Bot, BrainCircuit, HeadphonesIcon, LineChart, Milestone, Users2 } from "lucide-react";

const IntelligentCustomerSupport = () => {
  return (
    <CaseStudyLayout
      title="Intelligent Customer Support System"
      client="Global Retail Corp"
      category="Voice Agents"
      duration="4 months"
      team="5 AI Engineers, 2 UX Designers"
      outcome="Reduced response time by 75% and increased customer satisfaction by 40%"
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
    >
      <h2>The Challenge</h2>
      <p>
        Global Retail Corp was experiencing significant challenges with their customer support operations. 
        With over 10,000 inquiries daily across multiple channels, their human agents were overwhelmed, 
        resulting in long wait times, inconsistent responses, and declining customer satisfaction scores.
      </p>
      
      <p>
        The company needed a solution that could:
      </p>
      
      <ul>
        <li>Handle routine customer inquiries automatically</li>
        <li>Provide accurate and consistent responses across all channels</li>
        <li>Reduce wait times for customers</li>
        <li>Intelligently escalate complex issues to human agents</li>
        <li>Scale with seasonal demand fluctuations</li>
      </ul>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <HeadphonesIcon className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-black-visible">10,000+</h3>
          <p className="text-black-visible">Daily customer inquiries</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Users2 className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-black-visible">15 min</h3>
          <p className="text-black-visible">Average wait time</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <LineChart className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-black-visible">67%</h3>
          <p className="text-black-visible">Customer satisfaction</p>
        </div>
      </div>

      <h2>Our Approach</h2>
      <p>
        We developed a comprehensive AI-powered customer support system that leveraged the latest 
        advancements in natural language processing (NLP) and conversational AI. Our approach included:
      </p>

      <div className="my-8 space-y-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Milestone className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-black-visible">Initial Assessment & Planning</h3>
            <p className="text-black-visible">
              We analyzed their existing customer support data to identify common inquiries, 
              peak times, and escalation patterns to create a tailored solution.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-black-visible">AI Model Development</h3>
            <p className="text-black-visible">
              We built and trained custom large language models on their specific product knowledge, 
              policies, and previous customer interactions to ensure accuracy and relevance.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-black-visible">Intelligent Voice & Chat Agents</h3>
            <p className="text-black-visible">
              We implemented context-aware AI agents that could handle multiple languages, understand 
              customer intent, and maintain conversation history for a more personalized experience.
            </p>
          </div>
        </div>
      </div>

      <h2>Implementation</h2>
      <p>
        The implementation was rolled out in phases to ensure minimal disruption to ongoing operations:
      </p>
      
      <ol>
        <li>
          <strong>Pilot Phase:</strong> We deployed the system to handle 20% of incoming inquiries, 
          focusing on the most common and straightforward requests.
        </li>
        <li>
          <strong>Expansion:</strong> Based on feedback and performance metrics, we expanded to cover 
          60% of all customer inquiries across all channels.
        </li>
        <li>
          <strong>Full Integration:</strong> We integrated the AI system with their CRM and knowledge base, 
          allowing for real-time updates and continuous improvement.
        </li>
        <li>
          <strong>Agent Augmentation:</strong> We developed tools for human agents that provided them with 
          AI-powered suggestions and information during complex customer interactions.
        </li>
      </ol>

      <img 
        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop"
        alt="Implementation dashboard"
        className="my-10 rounded-xl w-full h-auto shadow-xl"
      />

      <h2>Results & Impact</h2>
      <p>
        The implementation of our Intelligent Customer Support System delivered outstanding results:
      </p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-black-visible">Quantitative Improvements</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">Reduced average response time from 15 minutes to under 4 minutes (75% improvement)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">Increased customer satisfaction from 67% to 94%</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">Enabled handling of 85% of inquiries without human intervention</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">Reduced operational costs by 35%</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-black-visible">Qualitative Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">More consistent customer experience across all channels</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">Higher job satisfaction among human agents who now focus on more complex, rewarding tasks</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">Enhanced insights into customer needs through AI-powered analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black-visible">Ability to scale support operations during peak seasons without additional hiring</span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Future Developments</h2>
      <p>
        Building on the success of this implementation, Global Retail Corp is now exploring:
      </p>
      
      <ul>
        <li>Proactive customer outreach based on predicted needs and issues</li>
        <li>Integration with IoT devices for automated troubleshooting of smart products</li>
        <li>Expanded multilingual capabilities to serve more international markets</li>
        <li>Advanced sentiment analysis to further personalize customer interactions</li>
      </ul>
    </CaseStudyLayout>
  );
};

export default IntelligentCustomerSupport;
