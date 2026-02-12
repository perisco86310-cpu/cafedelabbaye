import { motion } from "framer-motion";
import { Phone, MapPin, CreditCard } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4 font-body">
            Nous retrouver
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            Venez nous voir
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Pour toute réservation ou renseignement, n'hésitez pas à nous appeler.
            Nous vous accueillons avec le sourire, place de la Libération à Saint-Savin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 bg-background rounded-sm border border-border"
          >
            <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-display text-lg text-cream mb-2">Téléphone</h3>
            <a
              href="tel:+33549480083"
              className="text-muted-foreground hover:text-gold transition-colors font-body"
            >
              05 49 48 00 83
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-8 bg-background rounded-sm border border-border"
          >
            <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-display text-lg text-cream mb-2">Adresse</h3>
            <p className="text-muted-foreground font-body text-sm">
              48 Place de la Libération
              <br />
              86310 Saint-Savin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-8 bg-background rounded-sm border border-border"
          >
            <CreditCard className="w-8 h-8 text-gold mx-auto mb-4" />
            <h3 className="font-display text-lg text-cream mb-2">Paiement</h3>
            <p className="text-muted-foreground font-body text-sm">
              CB · Mastercard · Visa
              <br />
              Chèques vacances · Espèces
            </p>
          </motion.div>
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm overflow-hidden border border-border"
        >
          <iframe
            title="Localisation Café de l'Abbaye — Saint-Savin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.0!2d0.8645!3d46.5640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdbe8e8e8e8e8e%3A0x0!2s48+Place+de+la+Lib%C3%A9ration%2C+86310+Saint-Savin!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
