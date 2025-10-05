import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, Bot, Boxes, Cloud, Cog, Factory, LineChart, Package, Shield, Zap, Scale, Printer, Grid3x3, Cookie, Move, Layers, PackageOpen, Cpu, Grape } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const capabilities = [
    { icon: Package, title: "End-of-Line Automation", description: "Complete packaging line solutions" },
    { icon: Bot, title: "Robotic Systems & Gantry Palletizers", description: "Advanced robotic automation" },
    { icon: Cog, title: "Smart Conveying & Handling", description: "Intelligent material transport" },
    { icon: LineChart, title: "Product Tracking & Traceability", description: "Full supply chain visibility" },
    { icon: Cloud, title: "Software, Cloud & Data Analytics", description: "Connected factory solutions" },
    { icon: Zap, title: "Intelligent Controllers & Vision", description: "AI-powered control systems" },
  ];

  const productsInfographic = [
    { icon: Bot, title: "Pick & Place", color: "text-primary" },
    { icon: Printer, title: "QR Printing", color: "text-accent" },
    { icon: Boxes, title: "Palletizers", color: "text-primary" },
    { icon: Scale, title: "Checkweighers", color: "text-accent" },
    { icon: Cookie, title: "Biscuit Collator", color: "text-primary" },
    { icon: Move, title: "Pack Diverter", color: "text-accent" },
    { icon: Grid3x3, title: "Conveyors", color: "text-primary" },
    { icon: PackageOpen, title: "Case Packer", color: "text-accent" },
    { icon: Cpu, title: "Control Cards", color: "text-primary" },
    { icon: Grape, title: "Food Processing", color: "text-accent" },
    { icon: Layers, title: "IntelliLoad", color: "text-primary" },
    { icon: LineChart, title: "Tracking Systems", color: "text-accent" },
  ];

  const industries = [
    "Food", "FMCG", "Pharmaceuticals", "Noodles", "Biscuits", "Confectionery", "Logistics"
  ];

  return (
    <div className="min-h-screen automation-backdrop circuit-pattern">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <div className="award-badge bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-bold mb-4 shadow-lg">
                <Award className="inline-block h-8 w-8 mr-3" />
                PACMACHINE 2024 Winner - Indian Institute of Packaging
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              MOZI TRONICS
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              Innovating Your Automation Journey
            </p>
            <p className="text-xl text-muted-foreground">
              Committed to Unlocking Our Nation's Automation Potential!
            </p>
            
            {/* Products Infographic */}
            <div className="my-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {productsInfographic.map((product, index) => (
                  <div
                    key={index}
                    className="group relative bg-card/50 backdrop-blur-sm border rounded-lg p-4 hover:bg-card hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <product.icon className={`h-8 w-8 ${product.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-xs font-medium text-center leading-tight">{product.title}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" asChild>
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Header Statement */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Engineering Intelligent Automation for a Smarter Tomorrow
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Mozi Tronics, we design and deliver automation solutions that redefine efficiency across the packaging, food, and process industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From robotic palletizing to conveyor systems, checkweighers to cloud-driven production tracking — our technologies combine mechanical precision with digital intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
            <p className="text-lg text-muted-foreground">Comprehensive automation solutions for modern industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <capability.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card px-6 py-3 rounded-full border shadow-sm">
                <span className="font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center bg-primary text-primary-foreground">
            <CardHeader>
              <Shield className="h-16 w-16 mx-auto mb-4" />
              <CardTitle className="text-3xl">Our Promise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                Mozi Tronics builds not just machines — we build partnerships that help industries grow sustainably, efficiently, and intelligently.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how Mozi Tronics can revolutionize your automation journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;