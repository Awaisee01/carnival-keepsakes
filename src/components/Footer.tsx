import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl mb-2">BACCHANAL</h3>
            <p className="font-handwritten text-lg opacity-80">
              Keep your carnival memories alive
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link to="/customize" className="hover:opacity-80 transition-opacity">
                Customize
              </Link>
              <Link to="/faqs" className="hover:opacity-80 transition-opacity">
                FAQs
              </Link>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Bacchanal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
