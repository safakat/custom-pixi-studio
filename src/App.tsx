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
import FastbackFeeder from "./pages/products/FastbackFeeder";
import PotatoHalver from "./pages/products/PotatoHalver";
import PackDiverter from "./pages/products/PackDiverter";
import RotaryTurner from "./pages/products/RotaryTurner";
import ControlCards from "./pages/products/ControlCards";
import QRPrinting from "./pages/products/QRPrinting";
import BiscuitCollator from "./pages/products/BiscuitCollator";
import IntelliLoad from "./pages/products/IntelliLoad";
import ChocolateCounting from "./pages/products/ChocolateCounting";
import PickPlace from "./pages/products/PickPlace";
import ProductTracking from "./pages/solutions/ProductTracking";
import ProductionTracker from "./pages/solutions/ProductionTracker";
import SoftwareCloud from "./pages/solutions/SoftwareCloud";
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
          <Route path="/products/fastback-feeder" element={<FastbackFeeder />} />
          <Route path="/products/potato-halver" element={<PotatoHalver />} />
          <Route path="/products/pack-diverter" element={<PackDiverter />} />
          <Route path="/products/rotary-turner" element={<RotaryTurner />} />
          <Route path="/products/control-cards" element={<ControlCards />} />
          <Route path="/products/qr-printing" element={<QRPrinting />} />
          <Route path="/products/biscuit-collator" element={<BiscuitCollator />} />
          <Route path="/products/intelli-load" element={<IntelliLoad />} />
          <Route path="/products/chocolate-counting" element={<ChocolateCounting />} />
          <Route path="/products/pick-place" element={<PickPlace />} />
          <Route path="/solutions/product-tracking" element={<ProductTracking />} />
          <Route path="/solutions/production-tracker" element={<ProductionTracker />} />
          <Route path="/solutions/software-cloud" element={<SoftwareCloud />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
