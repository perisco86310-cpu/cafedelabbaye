import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-xl italic text-gold mb-1">
            Café de l'Abbaye
          </p>
          <p className="text-muted-foreground text-sm font-body">
            48 Place de la Libération · 86310 Saint-Savin · 05 49 48 00 83
          </p>
        </div>

        <nav className="flex items-center gap-4" aria-label="Réseaux sociaux">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300 hover:scale-110"
            aria-label="Suivez-nous sur Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300 hover:scale-110"
            aria-label="Suivez-nous sur Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </nav>

        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Café de l'Abbaye. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
