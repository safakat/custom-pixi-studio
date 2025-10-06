import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productTrackingImg from "@/assets/product-tracking.jpg";

const ProductTracking = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <Link to="/solutions" className="text-primary hover:underline mb-4 inline-block">&larr; Back to Solutions</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Tracking & Tracing Solutions</h1>
          <p className="text-xl text-muted-foreground">Comprehensive tracking ecosystems for visibility, authenticity, and compliance</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="h-96 rounded-lg overflow-hidden shadow-xl group">
              <img 
                src={productTrackingImg} 
                alt="Product Tracking & Tracing Solutions - QR code scanning and digital tracking" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mozi Tronics provides comprehensive product tracking and tracing ecosystems designed to ensure visibility, authenticity, and compliance across your supply chain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each product, case, or carton carries a unique identity — a QR, barcode, or RFID — linked to a centralized cloud database.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time data logging at every production stage</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Secure QR generation and encryption</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>ERP / MES connectivity for database validation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Mobile and desktop-based scan verification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Smart dashboards with batch, SKU, and timestamp analytics</span>
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
                  <span>100% traceability from factory to consumer</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Counterfeit prevention and brand trust</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Simplified recalls and regulatory compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Cloud-based data security and transparency</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground mb-12">
            <CardHeader>
              <CardTitle>End-User Assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Customers and distributors can verify the product's authenticity by scanning the QR code — confirming its genuine origin, manufacturing date, and batch information.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductTracking;