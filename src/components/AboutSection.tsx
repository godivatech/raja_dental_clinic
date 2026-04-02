import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Advanced Education: Master of Dental Surgery (M.D.S.)",
  "Specialized Expertise: Cosmetic & Restorative Dentistry",
  "Patient-Centered Care: Compassionate treatment for all ages",
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
              src="/assets/Divya image.jpeg"
              alt="Dr. R. Divya Sundarrajan - Chief Dental Surgeon at Raja Dental Clinic"
              loading="lazy"
              width={600}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-6 shadow-cta">
            <p className="font-display text-4xl">10+</p>
            <p className="text-lg font-semibold opacity-90">Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-bold text-primary uppercase tracking-widest mb-4">Meet Your Dentist</p>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
            Dr. R. Divya Sundarrajan
          </h2>
          <p className="text-xl text-primary font-bold mb-8">M.D.S. - Master of Dental Surgery</p>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
            Dr. Divya brings extensive expertise and unwavering commitment to patient comfort. 
            As the leader of our women-owned dental practice, she ensures every patient receives 
            the highest quality care with a gentle, professional approach.
          </p>
          <div className="space-y-3 mb-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle size={22} className="text-primary shrink-0" />
                <span className="text-foreground text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <a
            href="tel:+919944034198"
            className="inline-flex items-center px-8 py-4 rounded-xl text-primary-foreground text-xl font-bold shadow-cta hover:brightness-110 transition-all mt-4"
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
