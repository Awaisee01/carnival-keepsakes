import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-20 noise-overlay">
      <div className="absolute inset-0 bg-muted" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <h3 className="font-display text-4xl gradient-text mb-4">BACCHANAL</h3>
            <p className="font-handwritten text-lg text-muted-foreground">
              Keep your carnival memories alive forever.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground mb-4">Navigate</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/customize" className="text-muted-foreground hover:text-primary transition-colors">
                Customize Your Book
              </Link>
              <Link to="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-xl text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bacchanal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
