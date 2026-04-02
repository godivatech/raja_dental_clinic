import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import doctorImage from "@/assets/doctor-divya.jpg";

const highlights = [
  "MDS – Oral & Maxillofacial Surgery",
  "Pain-free, gentle procedures",
  "Latest dental technology",
  "Personalized treatment plans",
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img
              src={doctorImage}
              alt="Dr. R. Divya - Chief Dental Surgeon at Raja Dental Clinic"
              loading="lazy"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-5 shadow-cta">
            <p className="font-display text-2xl">10+</p>
            <p className="text-sm opacity-90">Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Meet Your Dentist</p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            Dr. R. Divya, MDS
          </h2>
          <p className="text-sm text-primary font-semibold mb-6">Chief Dental Surgeon</p>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            With over a decade of experience, Dr. Divya is dedicated to providing comfortable,
            world-class dental care. She believes every patient deserves a healthy, confident
            smile — without fear or pain. Her gentle approach and advanced techniques have
            earned the trust of hundreds of families in Srivilliputhur.
          </p>
          <div className="space-y-3 mb-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="tel:+919944034198"
            className="inline-flex items-center px-6 py-3 rounded-xl text-primary-foreground font-semibold shadow-cta hover:brightness-110 transition-all"
            style={{ background: "var(--gradient-cta)" }}
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
