import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const CtaSection = () => (
  <section className="py-20 md:py-28" style={{ background: "var(--gradient-cta)" }}>
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-display text-primary-foreground mb-4">
          Book Your Appointment Today
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
          Don't wait for the pain to get worse. Take the first step toward a healthier, brighter smile.
          Call us or send a WhatsApp message — we'll take care of the rest.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919944034198"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-card text-foreground font-semibold shadow-card-hover hover:shadow-card transition-all text-base"
          >
            <Phone size={20} className="text-primary" />
            Call +91 99440 34198
          </a>
          <a
            href="https://wa.me/919944034198?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-card/10 text-primary-foreground font-semibold border-2 border-primary-foreground/30 hover:bg-card/20 transition-all text-base"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
