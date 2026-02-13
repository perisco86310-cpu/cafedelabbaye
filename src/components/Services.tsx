import { motion } from "framer-motion";
import { UtensilsCrossed, Beer, Bed, Tv } from "lucide-react";
import barImage from "@/assets/bar.jpg";
import eventsImage from "@/assets/events.jpg";
import cuisineImage from "@/assets/cuisine.jpg";
import pmuImage from "@/assets/pmu.jpg";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    description:
      "Plat du jour, carte renouvelée chaque mois, burgers gourmands et saveurs du Sud. Menus de 11 à 22 €.",
    image: cuisineImage,
  },
  {
    icon: Beer,
    title: "Bar",
    description:
      "Vins corses et du Sud au verre, planches de charcuteries de Bastelica, café du matin entre habitués.",
    image: barImage,
  },
  {
    icon: Bed,
    title: "Hôtel",
    description:
      "Chambres confortables pour vos séjours à Saint-Savin, au cœur du village, à deux pas de l'abbaye classée UNESCO.",
    image: eventsImage,
  },
  {
    icon: Tv,
    title: "PMU & Courses",
    description:
      "Salle dédiée avec écran Équidia pour suivre les courses hippiques dans une ambiance joyeuse et animée.",
    image: pmuImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-body">
            Tout sous un même toit
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Nos services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <service.icon className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-display text-xl text-cream mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
