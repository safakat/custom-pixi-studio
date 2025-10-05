import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, LineChart, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Solutions = () => {
  const solutions = [
    {
      icon: QrCode,
      title: "Product Tracking & Tracing",
      description: "Comprehensive tracking ecosystems for visibility, authenticity, and compliance across your supply chain",
      features: ["Real-time data logging", "Secure QR generation", "ERP/MES connectivity", "End-user verification"],
      path: "/solutions/product-tracking"
    },
    {
      icon: LineChart,
      title: "Production Tracker",
      description: "Intelligent data-driven solution that monitors, logs, and analyzes production performance in real-time",
      features: ["Real-time monitoring", "OEE calculation", "Downtime analysis", "Custom analytics"],
      path: "/solutions/production-tracker"
    },
    {
      icon: Cloud,
      title: "Software & Cloud Solutions",
      description: "Custom software and cloud platforms for automation data handling, visualization, and decision support",
      features: ["Database management", "Cloud IoT gateways", "Analytics dashboards", "ERP/MES integration"],
      path: "/solutions/software-cloud"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Intelligent software and data solutions that transform manufacturing operations
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <solution.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                      <CardDescription className="text-base">{solution.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link to={solution.path}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Factory?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Connect your operations with intelligent software and cloud solutions
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;