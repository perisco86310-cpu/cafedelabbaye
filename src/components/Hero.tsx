import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-6"
        >
          Saint-Riquier
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream text-shadow-hero italic mb-6"
        >
          Café de L'Abbaye
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-cream/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Le café restaurant incontournable de Saint-Riquier.
          <br />
          Cuisine traditionnelle, en salle ou en terrasse, dans une ambiance chaleureuse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:0322288114"
            className="flex items-center gap-3 px-8 py-4 gold-gradient text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            <Phone className="w-5 h-5" />
            03 22 28 81 14
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-8 py-4 border border-gold text-gold font-semibold rounded-sm hover:bg-gold/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contactez-nous
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
