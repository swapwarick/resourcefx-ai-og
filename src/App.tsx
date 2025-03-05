
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IntelligentCustomerSupport from "./pages/case-studies/IntelligentCustomerSupport";
import KnowledgeRetrievalSystem from "./pages/case-studies/KnowledgeRetrievalSystem";
import AutonomousContentCreation from "./pages/case-studies/AutonomousContentCreation";
import FinancialAnalysisAssistant from "./pages/case-studies/FinancialAnalysisAssistant";
import HealthcareDiagnosticSupport from "./pages/case-studies/HealthcareDiagnosticSupport";
import AIStrategyImplementation from "./pages/case-studies/AIStrategyImplementation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Case Study Routes */}
          <Route path="/case-study/intelligent-customer-support" element={<IntelligentCustomerSupport />} />
          <Route path="/case-study/knowledge-retrieval-system" element={<KnowledgeRetrievalSystem />} />
          <Route path="/case-study/autonomous-content-creation" element={<AutonomousContentCreation />} />
          <Route path="/case-study/financial-analysis-assistant" element={<FinancialAnalysisAssistant />} />
          <Route path="/case-study/healthcare-diagnostic-support" element={<HealthcareDiagnosticSupport />} />
          <Route path="/case-study/ai-strategy-implementation" element={<AIStrategyImplementation />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
