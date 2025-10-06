import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, Bot, Boxes, Cloud, Cog, Factory, LineChart, Package, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroAutomation from "@/assets/hero-sophisticated.jpg";

const Index = () => {
  const capabilities = [
    { icon: Package, title: "End-of-Line Automation", description: "Complete packaging line solutions", link: "/products" },
    { icon: Bot, title: "Robotic Systems & Gantry Palletizers", description: "Advanced robotic automation", link: "/products/robotic-palletizer" },
    { icon: Cog, title: "Smart Conveying & Handling", description: "Intelligent material transport", link: "/products/dynamic-conveyors" },
    { icon: LineChart, title: "Product Tracking & Traceability", description: "Full supply chain visibility", link: "/solutions/product-tracking" },
    { icon: Cloud, title: "Software, Cloud & Data Analytics", description: "Connected factory solutions", link: "/solutions/software-cloud" },
    { icon: Zap, title: "Intelligent Controllers & Vision", description: "AI-powered control systems", link: "/products/control-cards" },
  ];

  const industries = [
    "Food", "FMCG", "Pharmaceuticals", "Noodles", "Biscuits", "Confectionery", "Logistics"
  ];

  return (
    <div className="min-h-screen automation-backdrop circuit-pattern">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 overflow-hidden">
        <div className="absolute inset-0 shimmer-effect opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block float-animation">
              <div className="award-badge bg-primary text-primary-foreground px-6 py-3 rounded-full text-base font-bold mb-4 shadow-lg">
                <Award className="inline-block h-8 w-8 mr-3" />
                PACMACHINE 2024 Winner - Indian Institute of Packaging
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
              MOZI TRONICS
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary animate-fade-in">
              Innovating Your Automation Journey
            </p>
            <p className="text-xl text-muted-foreground animate-fade-in">
              Committed to Unlocking Our Nation's Automation Potential!
            </p>
            
            {/* Hero Image with Animation */}
            <div className="relative my-8 rounded-xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src={heroAutomation} 
                alt="Modern industrial automation factory with robotic systems and advanced technology by Mozi Tronics" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
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
              <Link key={index} to={capability.link}>
                <Card className="vibrant-card h-full cursor-pointer">
                  <CardHeader>
                    <capability.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{capability.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
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
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
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