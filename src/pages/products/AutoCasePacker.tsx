import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AutoCasePacker = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="text-primary hover:underline mb-4 inline-block">&larr; Back to Products</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto Case Packer</h1>
          <p className="text-xl text-muted-foreground">Advanced, servo-driven, end-of-line packaging system</p>
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
              <p className="text-muted-foreground leading-relaxed">
                The Mozi Tronics Auto Case Packer (ACP) is an advanced, servo-driven, end-of-line packaging system designed for high-speed, precision-controlled carton packing.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Built for biscuit, noodle, and overwrap pack applications, it streamlines manual packing operations with automated collation, orientation, and carton loading mechanisms.
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Throughput</p>
                  <p className="text-muted-foreground">Up to 300 packs/min</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Filling Efficiency</p>
                  <p className="text-muted-foreground">&gt;99%</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Scrap Rate</p>
                  <p className="text-muted-foreground">&lt;2%</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Machine Uptime</p>
                  <p className="text-muted-foreground">&gt;97%</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Operator Requirement</p>
                  <p className="text-muted-foreground">1 person</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold">Accuracy</p>
                  <p className="text-muted-foreground">100% count verification</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Servo-based synchronization across conveyors and collators</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Compact and modular layout for existing lines</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Recipe-driven changeovers via HMI interface</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time diagnostics and predictive maintenance alerts</span>
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
                  <span>Consistent packing quality and reduced downtime</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Improved labor efficiency and safety</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Scalable design for multi SKU operations</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
            </CardHeader>
            <CardContent>
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

export default AutoCasePacker;