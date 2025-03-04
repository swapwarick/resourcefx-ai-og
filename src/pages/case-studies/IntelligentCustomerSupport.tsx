
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
      <h2 className="text-black text-2xl font-bold mb-4">The Challenge</h2>
      <p className="text-black mb-4">
        Global Retail Corp was experiencing significant challenges with their customer support operations. 
        With over 10,000 inquiries daily across multiple channels, their human agents were overwhelmed, 
        resulting in long wait times, inconsistent responses, and declining customer satisfaction scores.
      </p>
      
      <p className="text-black mb-4">
        The company needed a solution that could:
      </p>
      
      <ul className="text-black mb-6 list-disc pl-6">
        <li className="mb-2">Handle routine customer inquiries automatically</li>
        <li className="mb-2">Provide accurate and consistent responses across all channels</li>
        <li className="mb-2">Reduce wait times for customers</li>
        <li className="mb-2">Intelligently escalate complex issues to human agents</li>
        <li className="mb-2">Scale with seasonal demand fluctuations</li>
      </ul>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <HeadphonesIcon className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-black">10,000+</h3>
          <p className="text-black">Daily customer inquiries</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Users2 className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-black">48</h3>
          <p className="text-black">New users this month</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <LineChart className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-black">67%</h3>
          <p className="text-black">Customer satisfaction</p>
        </div>
      </div>

      <h2 className="text-black text-2xl font-bold mb-4">Our Approach</h2>
      <p className="text-black mb-4">
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
            <h3 className="text-lg font-medium mb-1 text-black">Initial Assessment & Planning</h3>
            <p className="text-black">
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
            <h3 className="text-lg font-medium mb-1 text-black">AI Model Development</h3>
            <p className="text-black">
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
            <h3 className="text-lg font-medium mb-1 text-black">Intelligent Voice & Chat Agents</h3>
            <p className="text-black">
              We implemented context-aware AI agents that could handle multiple languages, understand 
              customer intent, and maintain conversation history for a more personalized experience.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-black text-2xl font-bold mb-4">Implementation</h2>
      <p className="text-black mb-4">
        The implementation was rolled out in phases to ensure minimal disruption to ongoing operations:
      </p>
      
      <ol className="text-black mb-6 list-decimal pl-6">
        <li className="mb-2">
          <strong>Pilot Phase:</strong> We deployed the system to handle 20% of incoming inquiries, 
          focusing on the most common and straightforward requests.
        </li>
        <li className="mb-2">
          <strong>Expansion:</strong> Based on feedback and performance metrics, we expanded to cover 
          60% of all customer inquiries across all channels.
        </li>
        <li className="mb-2">
          <strong>Full Integration:</strong> We integrated the AI system with their CRM and knowledge base, 
          allowing for real-time updates and continuous improvement.
        </li>
        <li className="mb-2">
          <strong>Agent Augmentation:</strong> We developed tools for human agents that provided them with 
          AI-powered suggestions and information during complex customer interactions.
        </li>
      </ol>

      <img 
        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop"
        alt="Implementation dashboard"
        className="my-10 rounded-xl w-full h-auto shadow-xl"
      />

      <h2 className="text-black text-2xl font-bold mb-4">Results & Impact</h2>
      <p className="text-black mb-4">
        The implementation of our Intelligent Customer Support System delivered outstanding results:
      </p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-black">Quantitative Improvements</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">Reduced average response time from 15 minutes to under 4 minutes (75% improvement)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">Increased customer satisfaction from 67% to 94%</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">Enabled handling of 85% of inquiries without human intervention</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">Reduced operational costs by 35%</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-black">Qualitative Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">More consistent customer experience across all channels</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">Higher job satisfaction among human agents who now focus on more complex, rewarding tasks</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">Enhanced insights into customer needs through AI-powered analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-black">Ability to scale support operations during peak seasons without additional hiring</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-black text-2xl font-bold mb-4">Future Developments</h2>
      <p className="text-black mb-4">
        Building on the success of this implementation, Global Retail Corp is now exploring:
      </p>
      
      <ul className="text-black mb-6 list-disc pl-6">
        <li className="mb-2">Proactive customer outreach based on predicted needs and issues</li>
        <li className="mb-2">Integration with IoT devices for automated troubleshooting of smart products</li>
        <li className="mb-2">Expanded multilingual capabilities to serve more international markets</li>
        <li className="mb-2">Advanced sentiment analysis to further personalize customer interactions</li>
      </ul>
    </CaseStudyLayout>
  );
};

export default IntelligentCustomerSupport;
