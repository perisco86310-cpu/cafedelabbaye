import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Mail, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${heroImage})`, y: bgY }}
      />
      <div className="absolute inset-0 hero-overlay" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold font-body tracking-[0.3em] uppercase text-sm mb-6"
        >
          Saint-Savin · Vienne (86)
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream text-shadow-hero italic mb-6"
        >
          Café de l'Abbaye
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-cream/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Bar · Restaurant · Hôtel · PMU
          <br />
          Une ambiance bistrot conviviale, sans chichi, sur la place de la Libération.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+33549480083"
            className="group flex items-center gap-3 px-8 py-4 gold-gradient text-primary-foreground font-semibold rounded-sm hover:shadow-[0_8px_30px_-6px_hsl(var(--gold)/0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            05 49 48 00 83
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 border border-gold text-gold font-semibold rounded-sm hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Nous trouver
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#restaurant"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-gold/60" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
