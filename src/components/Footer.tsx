import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">MOZI TRONICS</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Engineering Intelligent Automation for a Smarter Tomorrow
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="bg-accent text-accent-foreground px-3 py-1 rounded text-xs font-semibold">
                PACMACHINE 2024 Winner
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries We Serve</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Food & FMCG</li>
              <li>Pharmaceuticals</li>
              <li>Confectionery</li>
              <li>Biscuits & Noodles</li>
              <li>Logistics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>45/1, BBD Road, Hindmotor, Hooghly, West Bengal, Pin: 712233, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 7044341414</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@mozitronics.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hiring CTA */}
        <div className="border-t mt-8 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-2">We're Hiring Innovators.</h4>
            <p className="text-muted-foreground mb-4">Shape the Future of Automation with MoziTronics.</p>
            <Link to="/careers" className="text-primary hover:underline font-medium">
              View Careers →
            </Link>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Mozi Tronics. All rights reserved. | Committed to unlocking our nation's automation potential</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;