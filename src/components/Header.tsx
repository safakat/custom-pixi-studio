import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import moziLogo from "@/assets/mozi-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    { name: "Auto Case Packer", path: "/products/auto-case-packer" },
    { name: "Checkweigher Machines", path: "/products/checkweigher" },
    { name: "Dynamic Conveyors", path: "/products/dynamic-conveyors" },
    { name: "Fastback Vibratory Feeder", path: "/products/fastback-feeder" },
    { name: "Potato Auto Halver", path: "/products/potato-halver" },
    { name: "Automatic Pack Diverter", path: "/products/pack-diverter" },
    { name: "Rotary Disc Turner", path: "/products/rotary-turner" },
    { name: "Control Cards", path: "/products/control-cards" },
    { name: "QR Printing Solutions", path: "/products/qr-printing" },
    { name: "Biscuit Collator", path: "/products/biscuit-collator" },
    { name: "Intelli Load System", path: "/products/intelli-load" },
    { name: "Robotic Gantry Palletizer", path: "/products/robotic-palletizer" },
    { name: "Chocolate Counting System", path: "/products/chocolate-counting" },
    { name: "Pick & Place Machines", path: "/products/pick-place" },
  ];

  const solutions = [
    { name: "Product Tracking & Tracing", path: "/solutions/product-tracking" },
    { name: "Production Tracker", path: "/solutions/production-tracker" },
    { name: "Software & Cloud Solutions", path: "/solutions/software-cloud" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={moziLogo} 
              alt="Mozi Tronics Logo" 
              className="h-12 w-12"
            />
            <span className="font-bold text-primary text-lg hidden sm:inline">MOZI TRONICS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            
            {/* Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      {products.map((product) => (
                        <NavigationMenuLink key={product.path} asChild>
                          <Link
                            to={product.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{product.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Solutions Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4">
                      {solutions.map((solution) => (
                        <NavigationMenuLink key={solution.path} asChild>
                          <Link
                            to={solution.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{solution.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/careers" className="text-sm font-medium hover:text-primary transition-colors">
              Careers
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/solutions"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/careers"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;