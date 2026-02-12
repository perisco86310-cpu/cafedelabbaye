import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const Hours = () => {
  return (
    <section id="horaires" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Nos horaires
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Été */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-sm p-8 border border-border"
          >
            <h3 className="font-display text-2xl text-gold mb-6">
              Horaires d'été
            </h3>
            <p className="text-muted-foreground text-xs mb-4 font-body">
              Du mercredi 28 mai au dimanche 14 septembre
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-cream font-semibold mb-2 font-body text-sm uppercase tracking-wider">
                  Bar
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Tous les jours de 8h à 22h
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  Fermeture à 1h le vendredi
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <h4 className="text-cream font-semibold mb-2 font-body text-sm uppercase tracking-wider">
                  Restaurant
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Tous les jours : 12h–14h et 19h–21h
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hiver */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-sm p-8 border border-border"
          >
            <h3 className="font-display text-2xl text-gold mb-6">
              Horaires d'hiver
            </h3>
            <p className="text-muted-foreground text-xs mb-4 font-body">
              Hors période estivale
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-cream font-semibold mb-2 font-body text-sm uppercase tracking-wider">
                  Bar
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Lundi : 10h – 14h30
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  Mardi au Samedi : 8h – 20h
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  Dimanche : 8h – 19h
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <h4 className="text-cream font-semibold mb-2 font-body text-sm uppercase tracking-wider">
                  Restaurant
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Tous les midis : 12h – 14h
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  Vendredi et Samedi soir : 19h – 21h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
