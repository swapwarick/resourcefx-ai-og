import CaseStudyLayout from "@/components/layout/CaseStudyLayout";
import { BookOpen, Database, Lightbulb, Milestone, BarChart3, Factory, LineChart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AIStrategyImplementation = () => {
  return (
    <>
      <Helmet>
        <title>AI Strategy & Implementation Case Study | ResourceFX AI</title>
        <meta name="description" content="Discover how ResourceFX AI developed a comprehensive AI strategy for Manufacturing Innovations Inc, delivering $2.3M in annual savings through 5 key AI initiatives." />
        <meta name="keywords" content="AI strategy, AI implementation, manufacturing AI, digital transformation, AI consulting" />
        <link rel="canonical" href="https://resourcefx.ai/case-study/ai-strategy-implementation" />
      </Helmet>
      
      <CaseStudyLayout
        title="AI Strategy & Implementation"
        client="Manufacturing Innovations Inc"
        category="Consulting & Support"
        duration="10 months"
        team="2 AI Strategists, 3 Implementation Specialists"
        outcome="Successfully deployed 5 AI initiatives that delivered $2.3M in annual savings"
        heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
      >
        <h2 className="text-white">The Challenge</h2>
        <p className="text-white">
          Manufacturing Innovations Inc, a mid-sized manufacturing company with multiple production facilities, recognized the potential of AI to transform their operations but lacked the expertise and roadmap to effectively implement AI solutions. They faced several challenges in their digital transformation journey.
        </p>
        
        <ul className="text-white">
          <li>Limited internal AI expertise and unclear understanding of potential applications</li>
          <li>Fragmented data infrastructure across different facilities and systems</li>
          <li>Resistance to technological change within the organization</li>
          <li>Limited budget requiring careful prioritization of AI initiatives</li>
        </ul>

        <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Factory className="w-6 h-6 text-primary teal-glow-text" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">7</h3>
            <p className="text-white">Production facilities</p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary teal-glow-text" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">5</h3>
            <p className="text-white">AI initiatives deployed</p>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <LineChart className="w-6 h-6 text-primary teal-glow-text" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">48</h3>
            <p className="text-white">New users this month</p>
          </div>
        </div>

        <h2 className="text-white">Our Approach</h2>
        <p className="text-white">
          We developed a comprehensive AI strategy and implementation roadmap tailored to Manufacturing Innovations Inc's specific needs, goals, and constraints. Our approach focused on creating sustainable value through carefully selected and executed AI initiatives.
        </p>

        <div className="my-8 space-y-6">
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Milestone className="w-5 h-5 text-primary teal-glow-text" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1 text-white">Comprehensive Assessment</h3>
              <p className="text-white">
                We conducted a thorough analysis of the company's operations, data infrastructure, business goals, and organizational readiness for AI adoption.
              </p>
            </div>
          </div>
          
          <div className="flex">
            <div className="mr-4 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary teal-glow-text" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-1 text-white">Opportunity Prioritization</h3>
              <p className="text-white">
                We identified and ranked potential AI applications based on expected ROI, implementation complexity, and alignment with business objectives.
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
              <h3 className="text-lg font-medium mb-1 text-white">Strategic Roadmap Development</h3>
              <p className="text-white">
                We created a phased implementation plan with clear milestones, resource requirements, and expected outcomes for each AI initiative.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-white">Implementation</h2>
        <p className="text-white">
          Our implementation approach balanced quick wins to build momentum with longer-term strategic initiatives to create sustainable competitive advantage.
        </p>
        
        <ol className="text-white">
          <li>
            <strong>Phase 1:</strong> We established the data foundation by integrating and cleaning key data sources across facilities.
          </li>
          <li>
            <strong>Phase 2:</strong> We implemented initial high-ROI pilot projects in predictive maintenance and quality control.
          </li>
          <li>
            <strong>Phase 3:</strong> We scaled successful pilots and launched additional AI initiatives in production optimization and demand forecasting.
          </li>
          <li>
            <strong>Phase 4:</strong> We built internal AI capabilities through knowledge transfer and training programs for the client's team.
          </li>
        </ol>

        <img 
          src="https://images.unsplash.com/photo-1664575599736-c5197c684169?q=80&w=1000&auto=format&fit=crop"
          alt="AI strategy implementation"
          className="my-10 rounded-xl w-full h-auto shadow-xl"
        />

        <h2 className="text-white">Results & Impact</h2>
        <p className="text-white">
          Our AI strategy and implementation created significant operational and financial improvements for Manufacturing Innovations Inc across multiple dimensions.
        </p>

        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-medium mb-4 text-white">Quantitative Results</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">$2.3M in annual cost savings across implemented AI initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">42% reduction in unplanned downtime through predictive maintenance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">17% improvement in overall equipment effectiveness (OEE)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">22% reduction in quality defects through AI-powered visual inspection</span>
              </li>
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-medium mb-4 text-white">Qualitative Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">Enhanced data-driven decision making across the organization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">Increased cross-functional collaboration around AI initiatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">Developed internal AI competencies and reduced dependency on external consultants</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">→</span>
                <span className="text-white">Created a culture of innovation and continuous improvement</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-white">Future Developments</h2>
        <p className="text-white">
          Building on the success of the initial AI strategy and implementation, Manufacturing Innovations Inc has established a clear vision for future AI initiatives.
        </p>
        
        <ul className="text-white">
          <li>Expansion of predictive maintenance capabilities to all critical equipment</li>
          <li>Implementation of reinforcement learning for autonomous process optimization</li>
          <li>Development of an AI-powered supply chain optimization system</li>
          <li>Integration of computer vision for comprehensive quality control across all product lines</li>
        </ul>

        <div className="mt-12 p-6 glass-card">
          <h3 className="text-xl font-medium mb-4 text-white">Related Case Studies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/case-study/financial-analysis-assistant" className="p-4 bg-primary/5 hover:bg-primary/10 rounded-lg transition-all duration-300">
              <h4 className="text-lg font-medium text-primary mb-2">Financial Analysis Assistant</h4>
              <p className="text-white text-sm">Explore how our AI-powered financial analysis solution helped a major investment firm</p>
            </Link>
            <Link to="/case-study/autonomous-content-creation" className="p-4 bg-primary/5 hover:bg-primary/10 rounded-lg transition-all duration-300">
              <h4 className="text-lg font-medium text-primary mb-2">Autonomous Content Creation</h4>
              <p className="text-white text-sm">Learn how our AI agent increased content production by 300% for a marketing agency</p>
            </Link>
          </div>
        </div>
      </CaseStudyLayout>
    </>
  );
};

export default AIStrategyImplementation;
