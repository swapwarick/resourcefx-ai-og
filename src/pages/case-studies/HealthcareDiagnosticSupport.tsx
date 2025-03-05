
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";
import { BookOpen, Database, Lightbulb, Milestone, Heart, Activity, Stethoscope, FilePlus2 } from "lucide-react";

const HealthcareDiagnosticSupport = () => {
  return (
    <CaseStudyLayout
      title="Healthcare Diagnostic Support System"
      client="National Health Network"
      category="Custom AI Solutions"
      duration="8 months"
      team="4 AI Engineers, 3 Medical Specialists"
      outcome="Reduced diagnostic time by 35% and improved accuracy by 22%"
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
    >
      <h2 className="text-white">The Challenge</h2>
      <p className="text-white">
        National Health Network, a leading healthcare provider with multiple facilities across the country, faced significant challenges in diagnostic efficiency and accuracy. With increasing patient loads and more complex cases, medical professionals were under mounting pressure to deliver timely and accurate diagnoses.
      </p>
      
      <ul className="text-white">
        <li>Growing patient volumes led to increased wait times for diagnoses</li>
        <li>Variability in diagnostic approaches across different facilities and physicians</li>
        <li>Difficulty in integrating and analyzing diverse patient data types (medical history, lab results, imaging)</li>
        <li>Challenges in keeping up with the latest medical research and diagnostic protocols</li>
      </ul>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">125K+</h3>
          <p className="text-white">Patients impacted</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Stethoscope className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">35%</h3>
          <p className="text-white">Faster diagnoses</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Activity className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">48</h3>
          <p className="text-white">New users this month</p>
        </div>
      </div>

      <h2 className="text-white">Our Approach</h2>
      <p className="text-white">
        We developed a comprehensive Healthcare Diagnostic Support System that leverages advanced AI to assist medical professionals in analyzing patient data, identifying potential conditions, and recommending appropriate diagnostic pathways.
      </p>

      <div className="my-8 space-y-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <FilePlus2 className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Unified Patient Data Platform</h3>
            <p className="text-white">
              We built a system that seamlessly integrates diverse patient data sources, creating a comprehensive view of each patient's medical profile.
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
            <h3 className="text-lg font-medium mb-1 text-white">Medical Knowledge Integration</h3>
            <p className="text-white">
              We incorporated the latest medical research, clinical guidelines, and diagnostic protocols into an AI-powered knowledge base.
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
            <h3 className="text-lg font-medium mb-1 text-white">Diagnostic Pathway Recommendations</h3>
            <p className="text-white">
              We developed algorithms that analyze patient data to suggest potential diagnostic pathways, ranked by likelihood and supported by relevant medical evidence.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-white">Implementation</h2>
      <p className="text-white">
        Our implementation process prioritized clinical accuracy, integration with existing healthcare workflows, and a thoughtful user experience for medical professionals.
      </p>
      
      <ol className="text-white">
        <li>
          <strong>Phase 1:</strong> We developed the data integration framework to securely connect with electronic health records and other clinical systems.
        </li>
        <li>
          <strong>Phase 2:</strong> We built and trained the diagnostic support algorithms using anonymized historical patient data and verified medical knowledge.
        </li>
        <li>
          <strong>Phase 3:</strong> We designed the clinical interface with input from physicians to ensure it fit seamlessly into their diagnostic workflows.
        </li>
        <li>
          <strong>Phase 4:</strong> We conducted extensive validation and testing in a controlled clinical environment before full deployment.
        </li>
      </ol>

      <img 
        src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=1000&auto=format&fit=crop"
        alt="Healthcare diagnostic interface"
        className="my-10 rounded-xl w-full h-auto shadow-xl"
      />

      <h2 className="text-white">Results & Impact</h2>
      <p className="text-white">
        The Healthcare Diagnostic Support System has transformed diagnostic processes across National Health Network's facilities, benefiting both patients and healthcare providers.
      </p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Quantitative Results</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">35% reduction in average time to diagnosis</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">22% improvement in diagnostic accuracy</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">18% decrease in unnecessary diagnostic tests</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">27% reduction in diagnostic variability across facilities</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Qualitative Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Enhanced confidence in diagnostic decisions among physicians</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Improved clinical education for resident physicians and medical students</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">More efficient allocation of specialist consultation resources</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Increased patient satisfaction due to faster diagnostic process</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-white">Future Developments</h2>
      <p className="text-white">
        Building on the success of the initial implementation, National Health Network is exploring several enhancements to the Healthcare Diagnostic Support System.
      </p>
      
      <ul className="text-white">
        <li>Expansion to include additional medical specialties and rare conditions</li>
        <li>Integration of advanced imaging analysis capabilities for radiology and pathology</li>
        <li>Development of patient-specific treatment recommendation features</li>
        <li>Implementation of predictive analytics for disease progression and complication risk</li>
      </ul>
    </CaseStudyLayout>
  );
};

export default HealthcareDiagnosticSupport;
