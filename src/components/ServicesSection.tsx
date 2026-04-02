import { motion } from "framer-motion";
import { Zap, Smile, Scan, Shield, Heart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Root Canal Treatment",
    desc: "Save your natural tooth with our painless, single-sitting root canal procedures using advanced rotary systems.",
  },
  {
    icon: Scan,
    title: "Laser Dentistry",
    desc: "Minimally invasive laser treatments for gum care, cavity removal, and teeth whitening — faster healing, less discomfort.",
  },
  {
    icon: Shield,
    title: "Wisdom Tooth Removal",
    desc: "Safe, expert surgical extraction of impacted wisdom teeth with minimal recovery time.",
  },
  {
    icon: Smile,
    title: "Teeth Alignment & Aligners",
    desc: "Straighten your teeth discreetly with modern clear aligners and braces for a picture-perfect smile.",
  },
  {
    icon: Heart,
    title: "General Dental Care",
    desc: "Comprehensive check-ups, cleanings, fillings, and preventive care for the whole family.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, and smile makeovers to boost your confidence and transform your appearance.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-lg font-bold text-primary uppercase tracking-widest mb-4">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
          Advanced Dental Treatments
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          From routine care to complex procedures, we offer a full range of dental services
          using the latest technology for your comfort.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group min-h-[220px]"
          >
            <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
