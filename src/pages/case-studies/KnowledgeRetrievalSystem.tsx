
import CaseStudyLayout from "@/components/layout/CaseStudyLayout";
import { BookOpen, Database, FileSearch, Lightbulb, Milestone, Users2 } from "lucide-react";

const KnowledgeRetrievalSystem = () => {
  return (
    <CaseStudyLayout
      title="Knowledge Retrieval System"
      client="Legal Services International"
      category="RAG Applications"
      duration="6 months"
      team="4 AI Engineers, 1 Legal Expert, 1 UX Designer"
      outcome="Improved research efficiency by 5x and reduced time-to-insight by 60%"
      heroImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop"
    >
      <h2 className="text-white text-2xl font-bold mb-4">The Challenge</h2>
      <p className="text-white mb-4">
        Legal Services International, a global law firm with over 2,000 attorneys across 30 countries, 
        was struggling with information management and retrieval. Their vast knowledge repository contained:
      </p>
      
      <ul className="text-white mb-6 list-disc pl-6">
        <li className="mb-2">Millions of legal documents spanning decades of practice</li>
        <li className="mb-2">Case histories, legal precedents, and internal memoranda</li>
        <li className="mb-2">Regulatory updates from multiple jurisdictions</li>
        <li className="mb-2">Expert insights and commentary from senior partners</li>
      </ul>
      
      <p className="text-white mb-4">
        Attorneys were spending up to 40% of their billable time searching for relevant information, 
        with junior associates often duplicating research that had already been conducted elsewhere in the firm.
      </p>

      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Database className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">20TB+</h3>
          <p className="text-white">Of legal documents</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Users2 className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">48</h3>
          <p className="text-white">New users this month</p>
        </div>
        
        <div className="glass-card p-6 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FileSearch className="w-6 h-6 text-primary teal-glow-text" />
          </div>
          <h3 className="text-lg font-medium mb-2 text-white">40%</h3>
          <p className="text-white">Time spent on research</p>
        </div>
      </div>

      <h2 className="text-white text-2xl font-bold mb-4">Our Approach</h2>
      <p className="text-white mb-4">
        We designed a state-of-the-art Retrieval Augmented Generation (RAG) system tailored to legal research needs. 
        Our approach combined advanced vector embeddings, legal-domain-specific LLMs, and an intuitive user interface:
      </p>

      <div className="my-8 space-y-6">
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Milestone className="w-5 h-5 text-primary teal-glow-text" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1 text-white">Document Processing & Vectorization</h3>
            <p className="text-white">
              We developed a specialized pipeline to process legal documents, extract key information, 
              and create vector embeddings that capture the semantic meaning of legal concepts.
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
            <h3 className="text-lg font-medium mb-1 text-white">Legal-Domain LLM Fine-Tuning</h3>
            <p className="text-white">
              We fine-tuned LLMs on legal corpora to improve understanding of legal terminology, 
              reasoning, and citation formats, ensuring accurate and relevant responses.
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
            <h3 className="text-lg font-medium mb-1 text-white">Intelligent Search & Synthesis</h3>
            <p className="text-white">
              We implemented a natural language query system that allows attorneys to ask questions in 
              plain language and receive comprehensive answers with citations to source documents.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-white text-2xl font-bold mb-4">Implementation</h2>
      <p className="text-white mb-4">
        The implementation was structured in several phases to ensure minimal disruption to ongoing legal work:
      </p>
      
      <ol className="text-white mb-6 list-decimal pl-6">
        <li className="mb-2">
          <strong>Data Integration:</strong> We connected to various document repositories, case management systems, 
          and knowledge bases, creating a unified data layer.
        </li>
        <li className="mb-2">
          <strong>Vector Database Setup:</strong> We processed and indexed over 20TB of legal documents, 
          creating vector embeddings for efficient semantic search.
        </li>
        <li className="mb-2">
          <strong>LLM Integration:</strong> We developed a retrieval workflow that combined vector search with 
          LLM-based synthesis of retrieved information.
        </li>
        <li className="mb-2">
          <strong>User Interface Development:</strong> We created intuitive interfaces for lawyers to query the system, 
          including a chat interface, search filters, and citation management.
        </li>
        <li className="mb-2">
          <strong>Training & Adoption:</strong> We conducted training sessions across the firm's offices and implemented 
          a feedback loop for continuous improvement.
        </li>
      </ol>

      <img 
        src="https://images.unsplash.com/photo-1598791318878-10e76d178023?q=80&w=1000&auto=format&fit=crop"
        alt="Legal research dashboard"
        className="my-10 rounded-xl w-full h-auto shadow-xl"
      />

      <h2 className="text-white text-2xl font-bold mb-4">Results & Impact</h2>
      <p className="text-white mb-4">
        The Knowledge Retrieval System transformed how Legal Services International operates:
      </p>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Efficiency Gains</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Research time reduced from hours to minutes (80% decrease)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Associates now spend only 8% of time on research (down from 40%)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Brief preparation time decreased by 60%</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Case preparation cost reduced by 35%</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-card p-6">
          <h3 className="text-lg font-medium mb-4 text-white">Quality Improvements</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">More comprehensive legal research covering more relevant precedents</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Reduced risk of missing important cases or regulatory updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Improved knowledge sharing across practice areas and offices</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span className="text-white">Enhanced training of junior associates through guided research</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-white text-2xl font-bold mb-4">Client Feedback</h2>
      <div className="my-8 glass-card p-8 relative">
        <div className="text-5xl text-primary absolute top-4 left-4 opacity-20">"</div>
        <blockquote className="relative z-10 text-lg text-white italic ml-6">
          The Knowledge Retrieval System has revolutionized how we practice law. What used to take a junior associate 
          an entire day now takes minutes, and the quality of research has actually improved. This has allowed us to 
          focus more on analysis and client service, rather than hunting for information.
        </blockquote>
        <p className="mt-4 text-right font-medium text-white">— Managing Partner, Legal Services International</p>
      </div>

      <h2 className="text-white text-2xl font-bold mb-4">Future Developments</h2>
      <p className="text-white mb-4">
        Building on this success, we are now working with Legal Services International on:
      </p>
      
      <ul className="text-white mb-6 list-disc pl-6">
        <li className="mb-2">Predictive analytics to forecast case outcomes based on historical data</li>
        <li className="mb-2">Automated document generation for routine legal filings</li>
        <li className="mb-2">Cross-jurisdictional legal analysis for international cases</li>
        <li className="mb-2">Integration with court filing systems and client portals</li>
      </ul>
    </CaseStudyLayout>
  );
};

export default KnowledgeRetrievalSystem;
