
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";
import { BookOpen, Database, Lightbulb, Milestone } from "lucide-react";

const CaseStudyTemplate = () => {
  return (
    <CaseStudyLayout
      title="Case Study Title"
      client="Client Name"
      category="Category"
      duration="X months"
      team="Team composition"
      outcome="Key outcomes in brief"
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
    >
      <h2 className="text-white">The Challenge</h2>
      <p className="text-white">
        Description of the client's challenge or problem they were facing.
      </p>
      
      <ul className="text-white">
        <li>Challenge point 1</li>
        <li>Challenge point 2</li>
        <li>Challenge point 3</li>
      </ul>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">Stat 1</h3>
          <p className="text-white">Description</p>
        </div>
        
        {/* Add more stat cards as needed */}
      </div>

      <h2 className="text-white">Our Approach</h2>
      <p className="text-white">
        Description of the approach taken to solve the problem.
      </p>

      <div className="my-8 space-y-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Milestone className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Step 1</h3>
            <p className="text-white">
              Description of step 1 in the approach.
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
            <h3 className="text-lg font-medium mb-1 text-white">Step 2</h3>
            <p className="text-white">
              Description of step 2 in the approach.
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
            <h3 className="text-lg font-medium mb-1 text-white">Step 3</h3>
            <p className="text-white">
              Description of step 3 in the approach.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-white">Implementation</h2>
      <p className="text-white">
        Description of how the solution was implemented.
      </p>
      
      <ol className="text-white">
        <li>
          <strong>Phase 1:</strong> Description of phase 1.
        </li>
        <li>
          <strong>Phase 2:</strong> Description of phase 2.
        </li>
        <li>
          <strong>Phase 3:</strong> Description of phase 3.
        </li>
      </ol>

      <img 
        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop"
        alt="Implementation image"
        className="my-10 rounded-xl w-full h-auto shadow-xl"
      />

      <h2 className="text-white">Results & Impact</h2>
      <p className="text-white">
        Description of the results and impact of the implementation.
      </p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Quantitative Results</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Result 1</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Result 2</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Result 3</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Qualitative Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Benefit 1</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Benefit 2</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Benefit 3</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-white">Future Developments</h2>
      <p className="text-white">
        Description of potential future developments.
      </p>
      
      <ul className="text-white">
        <li>Future development 1</li>
        <li>Future development 2</li>
        <li>Future development 3</li>
      </ul>
    </CaseStudyLayout>
  );
};

export default CaseStudyTemplate;
