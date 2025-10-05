import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const DynamicConveyors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Dynamic Conveyors
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Modular Material Handling Solutions
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Product Image */}
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center mb-8">
                <span className="text-muted-foreground">[Product Image]</span>
              </div>

              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mozi Tronics' Dynamic Conveyors are engineered to ensure smooth, consistent, and reliable material handling across your production floor. Every conveyor is modular, adaptable, and customizable to match specific line speeds, load capacities, and hygiene standards.
              </p>

              {/* Types Available */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Types Available</h3>
                  <div className="space-y-3">
                    <div><strong>Fabric Belt Conveyors (PU/PVC)</strong> – for light to medium loads</div>
                    <div><strong>Plastic Modular Belt Conveyors</strong> – for washdown and heavy-duty use</div>
                    <div><strong>Slat Chain/Flexi Chain Conveyors</strong> – for curves and elevation changes</div>
                    <div><strong>Roller Conveyors</strong> – powered and gravity options</div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Advantages */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Key Advantages</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Up to 1.5 m/s operating speed</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>MS/SS construction (powder-coated or hygienic)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Adjustable height, guide rails, and drive locations</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Emergency stop and 360° safety guarding</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Increased plant efficiency and flow</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Long operational life with minimal maintenance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Smooth integration with Mozi Tronics packaging systems</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicConveyors;
