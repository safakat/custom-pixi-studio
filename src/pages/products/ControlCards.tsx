import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Eye, AlertTriangle } from "lucide-react";
import controlCardsImg from "@/assets/control-cards.jpg";

const ControlCards = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Control Cards
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Intelligent Machine Protection & Process Control
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
                  src={controlCardsImg} 
                  alt="Control Cards - Intelligent machine protection system" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Mozi Tronics Control Card Series ensures intelligent machine control, predictive protection, and production consistency for packaging systems.
              </p>

              {/* Control Modules */}
              <div className="space-y-6 mb-8">
                {/* Sniffer Control Card */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Eye className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Sniffer Control Card</h3>
                        <p className="text-muted-foreground mb-4">
                          Detects Product-in-Seal (PIS) anomalies and initiates auto tube formation correction to prevent sealing wastage.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Detects Product-in-Seal (PIS) anomalies</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Initiates auto tube formation correction</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Prevents sealing wastage</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Watchdog Controller */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Shield className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Watchdog Controller</h3>
                        <p className="text-muted-foreground mb-4">
                          Monitors product feed and detects empty-bag formation to prevent sealing without material.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Monitors product feed continuously</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Detects empty-bag formation</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Prevents sealing without material</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Choking Controller */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <AlertTriangle className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">Choking Controller</h3>
                        <p className="text-muted-foreground mb-4">
                          Identifies choke events in forming tubes and stops machines safely to minimize rework and machine stress.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Identifies choke events in forming tubes</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Stops machines safely</span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>Minimizes rework and machine stress</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Overall Benefits */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Overall Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Prevents product loss and material wastage</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Improves packaging uptime and efficiency</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Enhances automation intelligence and reliability</span>
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

export default ControlCards;
