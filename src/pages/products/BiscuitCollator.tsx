import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import biscuitCollatorImg from "@/assets/biscuit-collator-soft.jpg";

const BiscuitCollator = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Biscuit Collator
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Intelligent Collation for High-Speed Packaging Lines
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
                  src={biscuitCollatorImg} 
                  alt="Biscuit Collator - High-speed biscuit alignment system" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                An intelligent collation system for high-speed biscuit packaging lines that aligns and arranges biscuits before wrapping or case packing.
              </p>

              {/* Features */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Servo-based synchronization</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Multi-lane configuration</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Real-time count verification sensors</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Compact and modular frame</span>
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
                      <span>Uniform biscuit arrangement</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Improved wrapping machine efficiency</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Reduced manpower requirement</span>
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

export default BiscuitCollator;
