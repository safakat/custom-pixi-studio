import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Database, Cloud, BarChart3, Lock, Settings, Cpu } from "lucide-react";
import softwareCloudImg from "@/assets/software-cloud-soft.jpg";

const SoftwareCloud = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Software & Cloud Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              Industrial Automation, Data Analytics & IoT Integration
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Hero Image */}
              <div className="h-96 rounded-lg overflow-hidden mb-8 shadow-xl group">
                <img 
                  src={softwareCloudImg} 
                  alt="Software & Cloud Solutions - Industrial automation and data analytics platform" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Mozi Tronics, we believe that the future of manufacturing lies in the seamless integration of automation and information.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our Software & Cloud Solutions division bridges the gap between the factory floor and the boardroom — transforming raw production data into actionable insights, real-time control, and data-driven decision-making.
              </p>

              {/* Core Capabilities */}
              <div className="space-y-6 mb-12">
                <h2 className="text-3xl font-bold mb-6">Core Capabilities</h2>

                {/* DBMS */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Database className="h-8 w-8 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Industrial Database Management Systems (DBMS)</h3>
                        <p className="text-muted-foreground mb-4">
                          Our DBMS platforms collect and structure production data directly from your PLCs, HMIs, and sensors, ensuring complete traceability and data accuracy.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Real-time data capture from automation hardware</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">SQL/NoSQL database architecture</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">SKU-wise, line-wise data segregation</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Automated report generation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cloud & IIoT */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Cloud className="h-8 w-8 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Cloud Connectivity & Industrial IoT (IIoT) Platforms</h3>
                        <p className="text-muted-foreground mb-4">
                          Cloud-based IIoT platforms that allow users to visualize, monitor, and manage production lines from anywhere in the world with hybrid architecture — on-premise control with cloud replication.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Real-time machine dashboards and KPIs</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Secure MQTT and OPC-UA connectivity</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Mobile and web access</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Multi-plant data aggregation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Analytics */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <BarChart3 className="h-8 w-8 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Analytics & Visualization Dashboards</h3>
                        <p className="text-muted-foreground mb-4">
                          Interactive, visual dashboards tailored for your operations and KPIs with OEE tracking, quality compliance, maintenance analytics, and energy monitoring.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Production Performance – OEE, throughput</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Quality & Compliance tracking</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Data drill-down to machine level</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Multi-format export (Excel, PDF, CSV)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Enterprise Integration */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Settings className="h-8 w-8 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Enterprise Integration (ERP & MES Connectivity)</h3>
                        <p className="text-muted-foreground mb-4">
                          Integration with SAP, Oracle, Tally, or custom MES platforms for bidirectional data flow connecting shop-floor execution to business planning.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Real-time production updates into ERP</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Automatic batch creation and closure</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Material tracking and consumption logging</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Inventory reconciliation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Intelligent Control */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Cpu className="h-8 w-8 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Intelligent Control Software</h3>
                        <p className="text-muted-foreground mb-4">
                          In-house PLC, HMI, and SCADA software suites engineered for performance, safety, and scalability with intuitive interfaces and diagnostics.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Intuitive HMI layouts with live feedback</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Recipe management for multi-SKU</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Audit trail for user actions</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Siemens, Allen Bradley, Mitsubishi support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cybersecurity */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <Lock className="h-8 w-8 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Cybersecurity & Data Protection</h3>
                        <p className="text-muted-foreground mb-4">
                          Multiple security layers to ensure integrity and confidentiality of all connected systems, aligned with IEC 62443, ISO 27001, and GDPR-ready architecture.
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Encrypted MQTT / HTTPS communication</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Role-based user access</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">Redundant data backup</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">VPN-secured remote access</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* System Architecture */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">End-to-End System Architecture</h3>
                  <p className="text-muted-foreground mb-4">A unified digital ecosystem where every sensor, machine, and plant communicates in real-time:</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-accent">1.</span>
                      <span>Data Acquisition Layer – PLCs, sensors, HMIs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-accent">2.</span>
                      <span>Edge Processing – local gateways for data filtering</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-accent">3.</span>
                      <span>Database Layer – structured and normalized data storage</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-accent">4.</span>
                      <span>Cloud Layer – data replication, analytics, and archiving</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-accent">5.</span>
                      <span>Visualization & Control – dashboards, HMIs, and mobile apps</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="font-bold text-accent">6.</span>
                      <span>Enterprise Integration – ERP / MES connectivity</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Industries Served */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Industries Served</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 border border-border rounded-lg">
                      <p className="font-semibold">Food & FMCG</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <p className="font-semibold">Pharmaceutical</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <p className="font-semibold">Packaging OEMs</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <p className="font-semibold">Warehousing</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <p className="font-semibold">Dairy & Beverages</p>
                    </div>
                    <div className="text-center p-4 border border-border rounded-lg">
                      <p className="font-semibold">Industrial Equipment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Mozi Tronics Software Solutions</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Designed for Industry 4.0:</strong> Native support for OPC-UA, MQTT, and REST APIs</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Built for Real Operations:</strong> Tested under live plant conditions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Unified Ecosystem:</strong> One vendor, complete integration — hardware + software + cloud</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Analytics with Intelligence:</strong> AI-ready architecture for predictive analytics</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span><strong>Scalable Future:</strong> System grows with your operations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="mt-12 text-center space-y-4">
                <h3 className="text-2xl font-bold">Transform Your Factory into a Connected, Data-Driven Enterprise</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact">Request a Demo</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Speak with a Solution Architect</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SoftwareCloud;
