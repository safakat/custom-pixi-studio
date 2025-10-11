import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import rotaryTurnerImg from "@/assets/rotary-turner-soft.jpg";
import rotaryTurner1 from "@/assets/rotary-turner-1.jpg";
import MediaGallery from "@/components/MediaGallery";

const RotaryTurner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Rotary Disc Turner
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Precision Product Reorientation for Processing Lines
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Product Image */}
              <div className="h-96 rounded-lg overflow-hidden mb-8 shadow-xl group">
                <img 
                  src={rotaryTurnerImg} 
                  alt="Rotary Disc Turner - Precision product reorientation system" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                A compact, high-precision Rotary Disc Turner engineered to rotate or reorient products smoothly and safely. Perfect for products requiring inspection, coating, or orientation before secondary processing.
              </p>

              {/* Key Features */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Servo-controlled rotational speed</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>SS disc and frame for hygiene</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Adjustable turn angles</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Designed for food and bakery environments</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Applications</h3>
                  <p className="text-muted-foreground mb-4">
                    Ideal for bakery, confectionery, and food processing lines where product orientation is critical for downstream operations.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Product inspection and quality control</li>
                    <li>Coating or glazing applications</li>
                    <li>Orientation for packaging systems</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Media Gallery */}
              <MediaGallery images={[rotaryTurner1]} />

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

export default RotaryTurner;
