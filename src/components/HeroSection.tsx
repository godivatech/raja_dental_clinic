import { Phone, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-smile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container relative z-10 py-28 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-light text-teal-dark px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star size={14} className="fill-current" />
              Trusted by 200+ Happy Patients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight mb-6">
              Your Smile,{" "}
              <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg font-body">
              Experience gentle, pain-free dental care with advanced technology.
              Srivilliputhur's most trusted multi-speciality dental clinic.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919944034198"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-primary-foreground font-semibold shadow-cta hover:brightness-110 transition-all"
                style={{ background: "var(--gradient-cta)" }}
              >
                <Phone size={18} />
                Book Appointment
              </a>
              <a
                href="https://wa.me/919944034198?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-card text-foreground font-semibold shadow-card hover:shadow-card-hover transition-all border border-border"
              >
                <MessageCircle size={18} className="text-primary" />
                WhatsApp Us
              </a>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-warm text-warm" />
                ))}
                <span className="ml-2 text-sm font-semibold text-foreground">5.0</span>
              </div>
              <div className="h-5 w-px bg-border" />
              <span className="text-sm text-muted-foreground">Best Dentist in Srivilliputhur</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <img
                src={heroImage}
                alt="Smiling patient at Raja Multi-Speciality Dental Clinic Srivilliputhur"
                width={1280}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card-hover">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                  <Star size={18} className="text-primary fill-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">5-Star Rated</p>
                  <p className="text-xs text-muted-foreground">on Google Reviews</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
