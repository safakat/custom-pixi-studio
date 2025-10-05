import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Eye, Lightbulb, Shield, Target, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Mozi Tronics</h1>
            <p className="text-xl text-muted-foreground">
              Transforming packaging lines and manufacturing floors into intelligent, connected, and efficient ecosystems
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Mozi Tronics is an automation technology company that transforms packaging lines and manufacturing floors into intelligent, connected, and efficient ecosystems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With in-house R&D, software expertise, and advanced fabrication capabilities, we provide end-to-end industrial automation tailored to every client's process.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To revolutionize industrial automation through precision engineering, digital integration, and sustainable innovation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower manufacturers to achieve higher productivity, consistency, and traceability through cutting-edge automation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Values</CardTitle>
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

      {/* Our Edge */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Edge</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Integrated Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Integrated mechanical, electrical & software development under one roof
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Modular Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Modular, scalable system design that grows with your business
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Proven Reliability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    &gt;97% uptime on installations with proven track record
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>24x7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    24x7 technical support and data-backed service tracking
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-20 w-20 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">PACMACHINE 2024</h2>
            <p className="text-xl mb-2">Indian Institute of Packaging</p>
            <p className="text-lg opacity-90">
              Recognition for excellence in packaging innovation and automation design
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;