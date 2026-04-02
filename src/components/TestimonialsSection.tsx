import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    text: "I was terrified of root canals, but Dr. Divya made it completely painless. The clinic is so clean and modern. Best dental experience I've ever had!",
    rating: 5,
  },
  {
    name: "Karthik R.",
    text: "Very professional and friendly staff. Got my wisdom tooth removed here — the whole process was smooth and recovery was quick. Highly recommended!",
    rating: 5,
  },
  {
    name: "Lakshmi S.",
    text: "Affordable prices and excellent care. Dr. Divya explains everything clearly and is very gentle. My whole family comes here now.",
    rating: 5,
  },
  {
    name: "Murugan V.",
    text: "The clinic has the latest equipment and feels like a premium hospital. Dr. Divya is extremely skilled and caring. 5 stars!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-lg font-bold text-primary uppercase tracking-widest mb-4">Patient Reviews</p>
        <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
          What Our Patients Say
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all min-h-[280px] flex flex-col justify-between"
          >
            <div>
              <Quote size={28} className="text-teal-light mb-5" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium italic">"{t.text}"</p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-warm text-warm" />
                ))}
              </div>
              <p className="font-bold text-lg text-foreground">{t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
