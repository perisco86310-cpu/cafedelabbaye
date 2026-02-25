import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const barHours = [
  { day: "Lundi", hours: "08h00 – 15h00" },
  { day: "Mardi", hours: "08h00 – 20h00" },
  { day: "Mercredi", hours: "08h00 – 20h00" },
  { day: "Jeudi", hours: "08h00 – 20h00" },
  { day: "Vendredi", hours: "08h00 – 23h00" },
  { day: "Samedi", hours: "08h30 – 23h00" },
  { day: "Dimanche", hours: "08h30 – 15h00" },
];

const Hours = () => {
  return (
    <section id="horaires" className="py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Clock className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Nos horaires
          </h2>
          <div className="w-16 h-[2px] bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-sm p-8 border border-border hover:border-gold/30 transition-colors duration-300"
          >
            <h3 className="font-display text-2xl text-gold mb-6">Bar</h3>
            <div className="space-y-0">
              {barHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-3 border-b border-border/50 last:border-0 hover:bg-muted/20 px-2 -mx-2 rounded-sm transition-colors"
                >
                  <span className="text-cream font-body text-sm">{item.day}</span>
                  <span className="text-muted-foreground font-body text-sm tabular-nums">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Restaurant */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-sm p-8 border border-border hover:border-gold/30 transition-colors duration-300"
          >
            <h3 className="font-display text-2xl text-gold mb-6">Restaurant</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-cream font-semibold mb-3 font-body text-sm uppercase tracking-wider">
                  Brasserie le midi
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Du mardi au vendredi
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  Service de 12h à 14h
                </p>
              </div>
              <div className="border-t border-border/50 pt-4">
                <h4 className="text-cream font-semibold mb-3 font-body text-sm uppercase tracking-wider">
                  À venir – Mars 2026
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Service midi et soir, 7j/7
                </p>
              </div>
              <div className="border-t border-border/50 pt-4">
                <h4 className="text-cream font-semibold mb-3 font-body text-sm uppercase tracking-wider">
                  Groupes & Autocars
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  Accueil sur réservation — jusqu'à 52 couverts en salle
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
