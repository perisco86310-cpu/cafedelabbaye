import { motion } from "framer-motion";
import burger1 from "@/assets/burger-1.jpg.asset.json";
import burger2 from "@/assets/burger-2.jpg.asset.json";

const photos = [
  { src: burger2.url, alt: "Pan bagnat servi sur planche en bois — Café de l'Abbaye" },
  { src: burger1.url, alt: "Pan bagnat maison et frites fraîches — Café de l'Abbaye" },
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-body">
            Spécialité du Sud
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Nos pan bagnat
          </h2>
          <div className="w-16 h-[2px] bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group overflow-hidden rounded-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;