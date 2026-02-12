import { motion } from "framer-motion";
import cuisineImage from "@/assets/cuisine.jpg";

const About = () => {
  return (
    <section id="restaurant" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-body">
            Notre histoire
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-6 leading-tight">
            L'ambiance bistrot,
            <br />
            <span className="italic text-gold">sans chichi</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 font-body">
            Depuis décembre 2025, Jérôme et Estelle Ferrari vous accueillent au Café
            de l'Abbaye, sur la place de la Libération à Saint-Savin. Ce bistrot
            emblématique, fraîchement rénové, propose une atmosphère conviviale où
            chacun se sent chez soi.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-body">
            Fort de vingt ans d'expérience en restauration entre Marseille et le
            Luberon, Jérôme propose des plats originaux et simples : un plat du jour,
            une carte renouvelée chaque mois, des burgers gourmands au pain du
            boulanger, des charcuteries corses et des vins du Sud.
          </p>

          <div className="flex flex-wrap gap-8">
            {[
              { label: "52 places en salle", sub: "mobilier neuf et confortable" },
              { label: "95 places en terrasse", sub: "dès les beaux jours" },
              { label: "Menus 11 à 22 €", sub: "cuisine du marché" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-gold pl-4">
                <p className="text-cream font-semibold text-sm font-body">{item.label}</p>
                <p className="text-muted-foreground text-xs font-body">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 border border-gold/20 rounded-sm" />
          <img
            src={cuisineImage}
            alt="Cuisine du Café de l'Abbaye à Saint-Savin"
            className="w-full h-[500px] object-cover rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
