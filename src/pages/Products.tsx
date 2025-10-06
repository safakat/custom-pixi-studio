import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import autoCasePackerImg from "@/assets/auto-case-packer-collage.jpg";
import checkweigherImg from "@/assets/checkweigher-machine.jpg";
import dynamicConveyorsImg from "@/assets/dynamic-conveyors.jpg";
import fastbackFeederImg from "@/assets/fastback-feeder.jpg";
import potatoHalverImg from "@/assets/potato-halver.jpg";
import packDiverterImg from "@/assets/pack-diverter.jpg";
import rotaryTurnerImg from "@/assets/rotary-turner.jpg";
import controlCardsImg from "@/assets/control-cards.jpg";
import qrPrintingImg from "@/assets/qr-printing.jpg";
import biscuitCollatorImg from "@/assets/biscuit-collator.jpg";
import intelliLoadImg from "@/assets/intelli-load.jpg";
import roboticPalletizerImg from "@/assets/robotic-palletizer.jpg";
import chocolateCountingImg from "@/assets/chocolate-counting.jpg";
import pickPlaceImg from "@/assets/pick-place.jpg";

const Products = () => {
  const products = [
    {
      title: "Auto Case Packer",
      description: "High-speed, servo-driven packaging system for biscuits and noodles",
      path: "/products/auto-case-packer",
      specs: "Up to 300 packs/min | >99% efficiency",
      image: autoCasePackerImg
    },
    {
      title: "Checkweigher Machines",
      description: "Precise dynamic weighing and quality verification",
      path: "/products/checkweigher",
      specs: "±20g accuracy | IP65 construction",
      image: checkweigherImg
    },
    {
      title: "Dynamic Conveyors",
      description: "Modular material handling solutions",
      path: "/products/dynamic-conveyors",
      specs: "Up to 1.5 m/s | MS/SS construction",
      image: dynamicConveyorsImg
    },
    {
      title: "Fastback Vibratory Feeder",
      description: "Gentle product conveyance for fragile items",
      path: "/products/fastback-feeder",
      specs: "Food-grade SS | Adjustable amplitude",
      image: fastbackFeederImg
    },
    {
      title: "Potato Auto Halver",
      description: "Automated potato cutting with precision",
      path: "/products/potato-halver",
      specs: "Uniform halving | SS construction",
      image: potatoHalverImg
    },
    {
      title: "Automatic Pack Diverter",
      description: "Intelligent pack redirection system",
      path: "/products/pack-diverter",
      specs: "High-speed actuation | Servo/pneumatic",
      image: packDiverterImg
    },
    {
      title: "Rotary Disc Turner",
      description: "Product rotation and reorientation",
      path: "/products/rotary-turner",
      specs: "Servo-controlled | Adjustable angles",
      image: rotaryTurnerImg
    },
    {
      title: "Control Cards (Sniffer/Watchdog/Choking)",
      description: "Intelligent machine control and protection",
      path: "/products/control-cards",
      specs: "Predictive protection | Auto-correction",
      image: controlCardsImg
    },
    {
      title: "QR-Based Printing Solutions",
      description: "Advanced traceability and verification",
      path: "/products/qr-printing",
      specs: "Real-time validation | Anti-counterfeit",
      image: qrPrintingImg
    },
    {
      title: "Biscuit Collator",
      description: "High-speed biscuit alignment system",
      path: "/products/biscuit-collator",
      specs: "Servo-based | Multi-lane configuration",
      image: biscuitCollatorImg
    },
    {
      title: "Intelli Load System",
      description: "Smart automated truck loading and tracking",
      path: "/products/intelli-load",
      specs: "Real-time tracking | Cloud analytics",
      image: intelliLoadImg
    },
    {
      title: "Robotic Gantry Palletizer",
      description: "Advanced multi-SKU palletizing system",
      path: "/products/robotic-palletizer",
      specs: "15 CBBs/min | 95%+ uptime",
      image: roboticPalletizerImg
    },
    {
      title: "Chocolate Counting & Stacking",
      description: "Automated counting and arrangement system",
      path: "/products/chocolate-counting",
      specs: "100% accuracy | Dual-lane operation",
      image: chocolateCountingImg
    },
    {
      title: "Pick & Place Machines",
      description: "Precision handling and placement",
      path: "/products/pick-place",
      specs: "High-speed servo | Vision-guided",
      image: pickPlaceImg
    },
  ];

  return (
    <div className="min-h-screen automation-backdrop circuit-pattern">
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
              <Card key={index} className="vibrant-card overflow-hidden">
                <CardHeader className="p-0">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={`${product.title} - ${product.description}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 pb-0">
                    <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                    <CardDescription className="text-sm text-accent font-semibold">
                      {product.specs}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
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