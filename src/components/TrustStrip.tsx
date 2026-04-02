import { Users, Award, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "200+", label: "Happy Patients" },
  { icon: Award, value: "MDS", label: "Specialist Doctor" },
  { icon: Shield, value: "100%", label: "Sterilized Equipment" },
  { icon: Clock, value: "10+", label: "Years Experience" },
];

const TrustStrip = () => (
  <section className="relative -mt-8 z-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl shadow-card-hover p-6 md:p-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                <stat.icon size={22} className="text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground font-display">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustStrip;
