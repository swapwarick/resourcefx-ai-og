
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";
import { BookOpen, Database, Lightbulb, Milestone, TrendingUp, Coins, BarChart4, PieChart } from "lucide-react";

const FinancialAnalysisAssistant = () => {
  return (
    <CaseStudyLayout
      title="Financial Analysis Assistant"
      client="Investment Partners LLC"
      category="Agentic AI"
      duration="6 months"
      team="3 AI Engineers, 2 Financial Analysts"
      outcome="Improved portfolio performance by 12% year-over-year"
      heroImage="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1600&auto=format&fit=crop"
    >
      <h2 className="text-white">The Challenge</h2>
      <p className="text-white">
        Investment Partners LLC, a mid-sized investment firm, was grappling with the exponential growth of financial data and the need to make faster, more accurate investment decisions. Traditional analysis methods were becoming increasingly inadequate in a rapidly changing market environment.
      </p>
      
      <ul className="text-white">
        <li>Analysts were overwhelmed by the volume and complexity of financial data</li>
        <li>Time-critical investment opportunities were being missed due to slow analysis</li>
        <li>Inconsistent analysis methodologies led to variable portfolio performance</li>
        <li>Complex market patterns were difficult to identify manually</li>
      </ul>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Coins className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">$2.7B</h3>
          <p className="text-white">Assets under management</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">12%</h3>
          <p className="text-white">Performance improvement</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">48</h3>
          <p className="text-white">New users this month</p>
        </div>
      </div>

      <h2 className="text-white">Our Approach</h2>
      <p className="text-white">
        We developed an intelligent Financial Analysis Assistant that combines advanced data processing, pattern recognition, and predictive modeling to provide actionable investment insights and recommendations.
      </p>

      <div className="my-8 space-y-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Milestone className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Comprehensive Data Integration</h3>
            <p className="text-white">
              We created a unified data platform that ingests and normalizes financial data from multiple sources, including market feeds, company reports, economic indicators, and news.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <BarChart4 className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Advanced Pattern Recognition</h3>
            <p className="text-white">
              We implemented sophisticated algorithms to identify complex patterns and correlations across different financial metrics and market conditions.
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
            <h3 className="text-lg font-medium mb-1 text-white">Actionable Recommendations</h3>
            <p className="text-white">
              We developed a recommendation engine that translates analysis into clear, actionable investment strategies aligned with the firm's objectives and risk tolerance.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-white">Implementation</h2>
      <p className="text-white">
        Our implementation process focused on creating a robust, reliable system that seamlessly integrated with the firm's existing workflows while providing significant analytical advantages.
      </p>
      
      <ol className="text-white">
        <li>
          <strong>Phase 1:</strong> We built the data integration platform to consolidate financial information from diverse sources.
        </li>
        <li>
          <strong>Phase 2:</strong> We developed and trained the pattern recognition and predictive models on historical market data.
        </li>
        <li>
          <strong>Phase 3:</strong> We created the recommendation engine with customizable risk parameters and investment strategy frameworks.
        </li>
        <li>
          <strong>Phase 4:</strong> We implemented the user interface and integrated with existing trading and portfolio management systems.
        </li>
      </ol>

      <img 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        alt="Financial analysis dashboard"
        className="my-10 rounded-xl w-full h-auto shadow-xl"
      />

      <h2 className="text-white">Results & Impact</h2>
      <p className="text-white">
        The Financial Analysis Assistant transformed Investment Partners LLC's approach to portfolio management and significantly improved their investment outcomes.
      </p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Quantitative Results</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">12% improvement in portfolio performance year-over-year</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">78% reduction in analysis time for investment decisions</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">35% increase in successful trade ratio</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">20% reduction in portfolio volatility</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Qualitative Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Analysts empowered to focus on strategic decisions rather than data processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">More consistent application of investment methodologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Enhanced ability to capitalize on short-term market opportunities</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Improved client confidence through more transparent investment rationales</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-white">Future Developments</h2>
      <p className="text-white">
        Building on the success of the Financial Analysis Assistant, Investment Partners LLC is exploring several enhancements to further optimize their investment processes.
      </p>
      
      <ul className="text-white">
        <li>Integration of alternative data sources, including sentiment analysis of social media and news</li>
        <li>Development of customized models for specific market segments and asset classes</li>
        <li>Implementation of real-time market monitoring and alert system for immediate opportunity identification</li>
        <li>Creation of an advanced portfolio optimization engine for automated rebalancing recommendations</li>
      </ul>
    </CaseStudyLayout>
  );
};

export default FinancialAnalysisAssistant;
