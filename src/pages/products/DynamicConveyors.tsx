import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DynamicConveyors = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="text-primary hover:underline mb-4 inline-block">&larr; Back to Products</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dynamic Conveyors</h1>
          <p className="text-xl text-muted-foreground">Modular material handling solutions</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">[Product Image Placeholder]</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mozi Tronics' Dynamic Conveyors are engineered to ensure smooth, consistent, and reliable material handling across your production floor.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every conveyor is modular, adaptable, and customizable to match specific line speeds, load capacities, and hygiene standards.
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Types Available</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div><strong>Fabric Belt Conveyors (PU/PVC)</strong> – for light to medium loads</div>
              <div><strong>Plastic Modular Belt Conveyors</strong> – for washdown and heavy-duty use</div>
              <div><strong>Slat Chain/Flexi Chain Conveyors</strong> – for curves and elevation changes</div>
              <div><strong>Roller Conveyors</strong> – powered and gravity options</div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Key Advantages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Up to 1.5 m/s operating speed</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>MS/SS construction (powder-coated or hygienic)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Adjustable height, guide rails, and drive locations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Emergency stop and 360° safety guarding</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Increased plant efficiency and flow</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Long operational life with minimal maintenance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Smooth integration with Mozi Tronics packaging systems</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DynamicConveyors;