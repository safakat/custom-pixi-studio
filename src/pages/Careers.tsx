import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  Target, 
  Shield, 
  BookOpen, 
  Users, 
  Rocket,
  GraduationCap,
  Globe,
  Award,
  TrendingUp,
  CheckCircle2,
  Mail
} from "lucide-react";

const Careers = () => {
  const culturePrinciples = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage curiosity and reward problem-solving."
    },
    {
      icon: Target,
      title: "Ownership",
      description: "Every engineer owns their project — from concept to commissioning."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency, trust, and accountability form our foundation."
    },
    {
      icon: BookOpen,
      title: "Learning Never Stops",
      description: "From programming to cloud analytics — our people evolve with technology."
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "Success at Mozi Tronics is always shared."
    }
  ];

  const benefits = [
    {
      feature: "Cutting-Edge Projects",
      description: "Work on live industrial automation, robotic systems, and software solutions deployed across global plants."
    },
    {
      feature: "Cross-Domain Exposure",
      description: "Collaborate across mechanical, electrical, electronics, and software disciplines."
    },
    {
      feature: "Professional Growth",
      description: "Structured training programs in robotics, motion control, and cloud technologies."
    },
    {
      feature: "Innovation Environment",
      description: "Freedom to experiment, build prototypes, and contribute ideas."
    },
    {
      feature: "Global Outlook",
      description: "Exposure to international clients and industry standards."
    },
    {
      feature: "Work-Life Balance",
      description: "Flexible working culture with respect for personal time."
    },
    {
      feature: "Recognition & Rewards",
      description: "Performance-driven appraisal and fast-track career paths."
    }
  ];

  const openings = [
    "Electrical Engineer",
    "Mechanical Engineer/Machine Design",
    "Embedded Programmer",
    "Electronics Engineer"
  ];

  const applySteps = [
    {
      step: "Step 1 – Explore",
      description: "Go through our current openings and find the role that excites you."
    },
    {
      step: "Step 2 – Connect",
      description: 'Email your resume to careers@mozitronics.com with the subject line: "Application for [Position Name] – [Your Name]"'
    },
    {
      step: "Step 3 – Engage",
      description: "Shortlisted candidates are invited for a technical discussion and interaction with our core engineering team."
    },
    {
      step: "Step 4 – Begin Your Journey",
      description: "Once onboard, you'll join one of India's most dynamic automation teams — driving the next wave of smart manufacturing."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Join the Minds Engineering Tomorrow's Automation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              At Mozi Tronics, we are not just building machines — we're shaping the future of automation.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Every idea, every design, every solution here is powered by passionate engineers, thinkers, and innovators who believe in redefining what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
              <p className="text-xl text-primary mb-2">Driven by Innovation. United by Purpose.</p>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We thrive in an environment that values creativity, precision, and collaboration. Our teams work on cutting-edge automation systems, robotics, and digital technologies that drive real change across industries.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center">Core Cultural Principles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {culturePrinciples.map((principle, index) => (
                <Card key={index} className="hover-lift card-shadow">
                  <CardContent className="p-6">
                    <principle.icon className="h-10 w-10 text-primary mb-4" />
                    <h4 className="text-lg font-semibold mb-2">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-lg italic">
                  "We believe that great technology is built by great teams — and great teams are built on trust, challenge, and passion."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{benefit.feature}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Mozi Tronics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at Mozi Tronics</h2>
              <p className="text-xl text-primary mb-4">Behind Every Machine Is a Story of Passion</p>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Walk into any Mozi Tronics facility and you'll find teams designing robotic palletizers, developing software dashboards, calibrating conveyors, and solving real industry challenges. From brainstorming in our R&D lab to commissioning a new plant automation system on-site — every day is a new opportunity to learn, innovate, and grow.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Team Photo {i}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Current Openings</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {openings.map((position, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Rocket className="h-6 w-6 text-primary" />
                        <span className="font-semibold">{position}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-muted-foreground">
                  If you don't see an opening that matches your profile, write to us anyway — we're always eager to meet passionate innovators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How to Apply</h2>
            <div className="space-y-6">
              {applySteps.map((step, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{step.step}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Development */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Employee Development & Training</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We invest heavily in the professional growth of our people.
            </p>
            <p className="text-muted-foreground">
              Every Mozi Tronics team member undergoes structured training programs. Regular sessions and mentorship ensure our engineers remain future ready.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Voices from Our Team</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "At Mozi Tronics, I've had the opportunity to work on projects that directly impact how factories operate. Every day is a new challenge."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Mohd. Kaif</p>
                      <p className="text-sm text-muted-foreground">Jr. Software Engineer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">
                    "Here, ideas are valued. I joined as a trainee and today lead a cross functional team."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Sourav Samanta</p>
                      <p className="text-sm text-muted-foreground">Sr. Engineer Control Programming</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise</h2>
            <p className="text-xl mb-4">
              At Mozi Tronics, we don't just hire — we empower.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Every person joining our team contributes to a mission: to make automation smarter, simpler, and more human. Join us in building the next era of intelligent manufacturing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <a href="mailto:careers@mozitronics.com">Send Resume</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Explore Our Culture</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;