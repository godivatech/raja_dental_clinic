import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Visit Us</p>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
          Find Our Clinic
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display text-foreground mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">
                Near Government Hospital,<br />
                Srivilliputhur, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
              <Phone size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display text-foreground mb-1">Phone</h3>
              <a href="tel:+919944034198" className="text-sm text-primary font-semibold hover:underline">
                +91 99440 34198
              </a>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
              <Clock size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display text-foreground mb-1">Working Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon – Sat: 9:00 AM – 8:00 PM<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-card h-80 md:h-auto"
        >
          <iframe
            title="Raja Multi-Speciality Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123456789!2d77.6345!3d9.5117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSrivilliputhur!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
