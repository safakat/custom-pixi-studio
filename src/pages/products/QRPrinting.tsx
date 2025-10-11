import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, QrCode } from "lucide-react";
import qrPrintingImg from "@/assets/qr-printing-soft.jpg";
import qrPrinting1 from "@/assets/qr-printing-1.jpg";
import MediaGallery from "@/components/MediaGallery";

const QRPrinting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              QR-Based Printing Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Next-Generation Product Traceability & Authentication
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
                  src={qrPrintingImg} 
                  alt="QR-Based Printing Solutions - Advanced traceability system" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <QrCode className="h-12 w-12 text-accent" />
                <h2 className="text-3xl font-bold">Overview</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Mozi Tronics QR-Based Printing and Verification Solutions combine advanced data integration and printing precision for next-generation traceability. Each pack or carton is embedded with a unique QR code generated and managed through Mozi Tronics' secure database.
              </p>

              {/* Features */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Real-time QR code generation and validation</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Integration with MES and ERP databases</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>Reject mechanism for unreadable codes</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <span>High-resolution printing for CFCs and pouches</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* End-User Value */}
              <Card className="mb-8 border-accent">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">End-User Value</h3>
                  <p className="text-lg text-muted-foreground">
                    The end-user can verify product authenticity instantly by scanning the QR code, confirming that it is a genuine, traceable product directly from the manufacturer.
                  </p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Full supply-chain transparency</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Anti-counterfeit assurance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>Seamless digital documentation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Media Gallery */}
              <MediaGallery images={[qrPrinting1]} />

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

export default QRPrinting;
