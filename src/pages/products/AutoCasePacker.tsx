import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const AutoCasePacker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Auto Case Packer
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Advanced Servo-Driven End-of-Line Packaging System
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
                The Mozi Tronics Auto Case Packer (ACP) is an advanced, servo-driven, end-of-line packaging system designed for high-speed, precision-controlled carton packing. Built for biscuit, noodle, and overwrap pack applications, it streamlines manual packing operations with automated collation, orientation, and carton loading mechanisms.
              </p>

              {/* Technical Specifications */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-l-4 border-accent pl-4">
                      <p className="font-semibold">Throughput</p>
                      <p className="text-muted-foreground">Up to 300 packs/min</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p className="font-semibold">Filling Efficiency</p>
                      <p className="text-muted-foreground">&gt;99%</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p className="font-semibold">Scrap Rate</p>
                      <p className="text-muted-foreground">&lt;2%</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p className="font-semibold">Machine Uptime</p>
                      <p className="text-muted-foreground">&gt;97%</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p className="font-semibold">Operator Requirement</p>
                      <p className="text-muted-foreground">1 person</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p className="font-semibold">Accuracy</p>
                      <p className="text-muted-foreground">100% count verification</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Servo-based synchronization across conveyors and collators</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Compact and modular layout for existing lines</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Recipe-driven changeovers via HMI interface</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Real-time diagnostics and predictive maintenance alerts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Consistent packing quality and reduced downtime</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Improved labor efficiency and safety</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Scalable design for multi SKU operations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Applications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      Biscuit packs (single / overwrap)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      Noodle chain packs (Laddi)/Single Packs
                    </li>
                  </ul>
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

export default AutoCasePacker;
