import { motion } from "framer-motion";
import { HeartPulse, Cpu, IndianRupee, SprayCan, GraduationCap } from "lucide-react";

const reasons = [
  { icon: HeartPulse, title: "Pain-Free Treatments", desc: "We use advanced anesthesia and gentle techniques so you feel comfortable throughout every procedure." },
  { icon: Cpu, title: "Modern Technology", desc: "Digital X-rays, laser units, and rotary endodontics — our equipment matches top-tier dental hospitals." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality dental care doesn't have to break the bank. We offer honest, transparent pricing for every treatment." },
  { icon: SprayCan, title: "Hygienic & Sterile", desc: "Every instrument is autoclaved and every surface sanitized. Your safety is our highest priority." },
  { icon: GraduationCap, title: "Expert Doctor", desc: "Dr. Divya (MDS) brings specialist-level expertise with a compassionate, patient-first approach." },
];

const WhyChooseUs = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Raja Dental?</p>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
          Your Comfort Comes First
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We understand dental visits can feel stressful. That's why everything we do is designed
          to put you at ease — from the moment you walk in.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center p-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-teal-light flex items-center justify-center mx-auto mb-4">
              <r.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-base text-foreground mb-2">{r.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
