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
            Une cuisine à notre image :<br />
            <span className="italic text-gold">simple, raffinée et conviviale</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 font-body">
            Bienvenue au Café Restaurant de l'Abbaye de Saint-Riquier. Au pied de
            l'abbaye, en salle ou en terrasse, une équipe compétente est à votre
            disposition. L'été, profitez de nos deux terrasses fleuries : dans la
            cour intérieure ou face à l'abbatiale.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 font-body">
            Notre restaurant vous propose une cuisine traditionnelle avec 3 formules
            du jour au choix en semaine et une carte complète avec de nombreux
            produits régionaux.
          </p>

          <div className="flex flex-wrap gap-8">
            {[
              { label: "Cuisine du terroir", sub: "réalisée sur place" },
              { label: "Frites maison", sub: "épluchées et découpées" },
              { label: "Ambiance familiale", sub: "chaleureuse et conviviale" },
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
            alt="Cuisine traditionnelle du Café de l'Abbaye"
            className="w-full h-[500px] object-cover rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
