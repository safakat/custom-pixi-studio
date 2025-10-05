import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Products = () => {
  const products = [
    {
      title: "Auto Case Packer",
      description: "High-speed, servo-driven packaging system for biscuits and noodles",
      path: "/products/auto-case-packer",
      specs: "Up to 300 packs/min | >99% efficiency"
    },
    {
      title: "Checkweigher Machines",
      description: "Precise dynamic weighing and quality verification",
      path: "/products/checkweigher",
      specs: "±20g accuracy | IP65 construction"
    },
    {
      title: "Dynamic Conveyors",
      description: "Modular material handling solutions",
      path: "/products/dynamic-conveyors",
      specs: "Up to 1.5 m/s | MS/SS construction"
    },
    {
      title: "Fastback Vibratory Feeder",
      description: "Gentle product conveyance for fragile items",
      path: "/products/fastback-feeder",
      specs: "Food-grade SS | Adjustable amplitude"
    },
    {
      title: "Potato Auto Halver",
      description: "Automated potato cutting with precision",
      path: "/products/potato-halver",
      specs: "Uniform halving | SS construction"
    },
    {
      title: "Automatic Pack Diverter",
      description: "Intelligent pack redirection system",
      path: "/products/pack-diverter",
      specs: "High-speed actuation | Servo/pneumatic"
    },
    {
      title: "Rotary Disc Turner",
      description: "Product rotation and reorientation",
      path: "/products/rotary-turner",
      specs: "Servo-controlled | Adjustable angles"
    },
    {
      title: "Control Cards (Sniffer/Watchdog/Choking)",
      description: "Intelligent machine control and protection",
      path: "/products/control-cards",
      specs: "Predictive protection | Auto-correction"
    },
    {
      title: "QR-Based Printing Solutions",
      description: "Advanced traceability and verification",
      path: "/products/qr-printing",
      specs: "Real-time validation | Anti-counterfeit"
    },
    {
      title: "Biscuit Collator",
      description: "High-speed biscuit alignment system",
      path: "/products/biscuit-collator",
      specs: "Servo-based | Multi-lane configuration"
    },
    {
      title: "Intelli Load System",
      description: "Smart automated truck loading and tracking",
      path: "/products/intelli-load",
      specs: "Real-time tracking | Cloud analytics"
    },
    {
      title: "Robotic Gantry Palletizer",
      description: "Advanced multi-SKU palletizing system",
      path: "/products/robotic-palletizer",
      specs: "15 CBBs/min | 95%+ uptime"
    },
    {
      title: "Chocolate Counting & Stacking",
      description: "Automated counting and arrangement system",
      path: "/products/chocolate-counting",
      specs: "100% accuracy | Dual-lane operation"
    },
    {
      title: "Pick & Place Machines",
      description: "Precision handling and placement",
      path: "/products/pick-place",
      specs: "High-speed servo | Vision-guided"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive automation solutions engineered for excellence
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-48 bg-muted rounded-md mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">[Product Image]</span>
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-accent font-semibold">
                    {product.specs}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={product.path}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;