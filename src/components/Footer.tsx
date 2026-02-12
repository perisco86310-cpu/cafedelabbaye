import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl italic text-gold mb-1">
            Café de L'Abbaye
          </p>
          <p className="text-muted-foreground text-sm font-body">
            Saint-Riquier · 03 22 28 81 14
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Café de L'Abbaye. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
