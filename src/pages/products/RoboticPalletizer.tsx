import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import roboticPalletizerImg from "@/assets/robotic-palletizer-hero.jpg";
import roboticPalletizer1 from "@/assets/robotic-palletizer-1.jpg";
import roboticPalletizer2 from "@/assets/robotic-palletizer-2.jpg";
import roboticPalletizer3 from "@/assets/robotic-palletizer-3.jpg";
import roboticPalletizer4 from "@/assets/robotic-palletizer-4.jpg";
import MediaGallery from "@/components/MediaGallery";

const RoboticPalletizer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Robotic Gantry Palletizer System
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              The Pinnacle of Industrial Automation for Multi-SKU Palletizing
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Product Image */}
              <div className="h-[600px] rounded-lg overflow-hidden mb-8 shadow-xl group">
                <img 
                  src={roboticPalletizerImg} 
                  alt="Robotic Gantry Palletizer - Advanced automated palletizing system" 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Mozi Tronics Robotic Gantry Palletizer represents the pinnacle of industrial automation for multi-SKU palletizing. It automates the entire end-of-line workflow — from CBB infeed, SKU identification, and separation to traffic management and robotic pallet stacking.
              </p>

              {/* Advantages Over Cobots */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Advantages Over Cobots / Articulated Robots</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3">Parameter</th>
                          <th className="text-left py-3">Mozi Tronics Gantry</th>
                          <th className="text-left py-3">Conventional Cobots</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2">Throughput</td>
                          <td className="py-2 text-primary font-semibold">Up to 15 CBBs/min</td>
                          <td className="py-2">Typically 6–8 CBBs/min</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Payload</td>
                          <td className="py-2 text-primary font-semibold">Dual-box grip (18 kg total)</td>
                          <td className="py-2">Limited to 10–12 kg</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Uptime</td>
                          <td className="py-2 text-primary font-semibold">95%+</td>
                          <td className="py-2">85–90% typical</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Maintenance</td>
                          <td className="py-2 text-primary font-semibold">Low (linear guides)</td>
                          <td className="py-2">High (joint wear)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Workflow */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Workflow</h3>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">1.</span>
                      <span><strong>SKU Identification</strong> – Code scanners detect product SKU</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">2.</span>
                      <span><strong>Separation</strong> – Pneumatic pushers divert boxes by SKU</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">3.</span>
                      <span><strong>Traffic Management</strong> – Sensors manage accumulation and spacing</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">4.</span>
                      <span><strong>Robotic Palletization</strong> – Dual CBB pickup and stacking using servo-driven gantry</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-accent">5.</span>
                      <span><strong>Dual Pallet Mode</strong> – Allows continuous operation with zero idle time</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Safety & Controls */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Safety & Controls</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Light curtains at entry/exit</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Full safety enclosure</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Emergency stops & interlocks</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Central HMI with diagnostics</span>
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
                      <span>Independent operation of multiple palletizers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>95%+ uptime guarantee</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Modular relocation capability</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>No dependency on external cobot calibration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media Gallery */}
              <MediaGallery 
                images={[roboticPalletizer1, roboticPalletizer2, roboticPalletizer3, roboticPalletizer4]}
              />

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

export default RoboticPalletizer;
