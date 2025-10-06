import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProductTemplateProps {
  title: string;
  subtitle: string;
  overview: string;
  features: string[];
  benefits: string[];
  specs?: { label: string; value: string }[];
  images?: string[];
  videos?: string[];
}

const ProductTemplate = ({ title, subtitle, overview, features, benefits, specs, images, videos }: ProductTemplateProps) => {
  return (
    <div className="min-h-screen automation-backdrop circuit-pattern">
      <Header />
      
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="text-primary hover:underline mb-4 inline-block">&larr; Back to Products</Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">[Product Image Placeholder]</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{overview}</p>
            </div>
          </div>

          {specs && (
            <Card className="mb-8">
              <CardHeader><CardTitle>Specifications</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {specs.map((spec, i) => (
                    <div key={i} className="border-l-4 border-primary pl-4">
                      <p className="font-semibold">{spec.label}</p>
                      <p className="text-muted-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader><CardTitle>Key Features</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Benefits</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {videos && videos.length > 0 && (
            <Card className="mb-8">
              <CardHeader><CardTitle>Product Videos</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {videos.map((video, i) => (
                    <div key={i} className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src={video}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Product video ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {images && images.length > 0 && (
            <Card className="mb-8">
              <CardHeader><CardTitle>Product Images</CardTitle></CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {images.map((image, i) => (
                    <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted">
                      <img
                        src={image}
                        alt={`Product image ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductTemplate;