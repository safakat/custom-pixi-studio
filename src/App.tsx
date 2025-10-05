import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import AutoCasePacker from "./pages/products/AutoCasePacker";
import Checkweigher from "./pages/products/Checkweigher";
import DynamicConveyors from "./pages/products/DynamicConveyors";
import RoboticPalletizer from "./pages/products/RoboticPalletizer";
import ProductTracking from "./pages/solutions/ProductTracking";
import ProductionTracker from "./pages/solutions/ProductionTracker";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products/auto-case-packer" element={<AutoCasePacker />} />
          <Route path="/products/checkweigher" element={<Checkweigher />} />
          <Route path="/products/dynamic-conveyors" element={<DynamicConveyors />} />
          <Route path="/products/robotic-palletizer" element={<RoboticPalletizer />} />
          <Route path="/solutions/product-tracking" element={<ProductTracking />} />
          <Route path="/solutions/production-tracker" element={<ProductionTracker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
