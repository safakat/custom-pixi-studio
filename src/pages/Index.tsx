import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Brain, Cog, Cpu, Factory, Lightbulb, Mail, MapPin, Phone, Rocket, Settings, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-robots.jpg";
import automationImage from "@/assets/automation-solution.jpg";
import aiIntegrationImage from "@/assets/ai-integration.jpg";
import customManufacturingImage from "@/assets/custom-manufacturing.jpg";

const Index = () => {
  const solutions = [
    {
      icon: Factory,
      title: "Industrial Robotics",
      description: "Advanced robotic systems for manufacturing excellence and operational efficiency.",
      image: automationImage,
    },
    {
      icon: Brain,
      title: "AI-Based Automation",
      description: "Intelligent automation powered by cutting-edge artificial intelligence technology.",
      image: aiIntegrationImage,
    },
    {
      icon: Settings,
      title: "Product Design",
      description: "Innovative design solutions that transform concepts into reality.",
      image: customManufacturingImage,
    },
    {
      icon: Cog,
      title: "Custom Manufacturing",
      description: "Precision manufacturing tailored to your unique specifications.",
      image: automationImage,
    },
  ];

  const industries = [
    { icon: Factory, name: "Manufacturing" },
    { icon: Zap, name: "Automotive" },
    { icon: Rocket, name: "Aerospace" },
    { icon: Shield, name: "Healthcare" },
    { icon: Lightbulb, name: "Research" },
    { icon: Cpu, name: "Technology" },
  ];

  const processSteps = [
    { number: "01", title: "Consultation", description: "Understanding your unique requirements and challenges" },
    { number: "02", title: "Design", description: "Creating innovative solutions with precision engineering" },
    { number: "03", title: "Prototyping", description: "Testing and refining through iterative development" },
    { number: "04", title: "Manufacturing", description: "Building with the highest quality standards" },
    { number: "05", title: "Integration", description: "Seamless deployment and system integration" },
    { number: "06", title: "Support", description: "Ongoing maintenance and optimization services" },
  ];

  const testimonials = [
    {
      quote: "RoboForge transformed our production line with their innovative automation solutions. Efficiency increased by 40%.",
      author: "Sarah Johnson",
      position: "COO, TechManufacture Inc.",
    },
    {
      quote: "Their AI integration expertise helped us achieve unprecedented precision in our assembly processes.",
      author: "Michael Chen",
      position: "Director of Operations, AutoTech Systems",
    },
    {
      quote: "Outstanding engineering excellence and reliable support. RoboForge is our trusted robotics partner.",
      author: "Dr. Emily Rodriguez",
      position: "Head of R&D, Aerospace Innovations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Engineering the Future with Intelligent Robotics
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Precision. Innovation. Automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-effect hover:scale-105 transition-transform">
              <Mail className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform">
              <Rocket className="mr-2 h-5 w-5" />
              Explore Our Solutions
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About RoboForge Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the robotics revolution with cutting-edge technology and engineering excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift card-shadow metallic-border">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To revolutionize industries through innovative robotics solutions that enhance efficiency, precision, and sustainability.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow metallic-border">
              <CardHeader>
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To be the global leader in intelligent automation, shaping the future of manufacturing and robotics technology.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover-lift card-shadow metallic-border">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Innovation, precision, reliability, and sustainability drive everything we do. Excellence is our standard.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive robotics and automation services tailored to your industry needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-lift card-shadow overflow-hidden group metallic-border">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering robotics excellence across multiple sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover-lift text-center p-6 card-shadow metallic-border">
                <industry.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="font-semibold">{industry.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to delivery: A proven methodology for success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover-lift card-shadow metallic-border relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg glow-effect">
                  {step.number}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift card-shadow metallic-border">
                <CardHeader>
                  <div className="text-primary text-5xl mb-4">"</div>
                  <CardDescription className="text-base italic mb-4">
                    {testimonial.quote}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your operations? Contact us today
            </p>
          </div>
          
          <Card className="card-shadow metallic-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your name" className="metallic-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@company.com" className="metallic-border" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Your company name" className="metallic-border" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..."
                    rows={6}
                    className="metallic-border"
                  />
                </div>
                
                <Button size="lg" className="w-full glow-effect hover:scale-105 transition-transform">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">RoboForge Industries</h3>
              <p className="text-muted-foreground">Engineering the future with intelligent robotics solutions.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>1234 Innovation Drive, Tech Valley, CA 94000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>info@roboforge.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Industrial Robotics</li>
                <li>AI Automation</li>
                <li>Product Design</li>
                <li>Manufacturing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Industries</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Manufacturing</li>
                <li>Automotive</li>
                <li>Aerospace</li>
                <li>Healthcare</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 RoboForge Industries. All rights reserved. | Precision. Innovation. Automation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;