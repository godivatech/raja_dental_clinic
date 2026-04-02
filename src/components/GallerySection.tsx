import { motion } from "framer-motion";
import clinicInterior from "@/assets/clinic-interior.jpg";
import clinicEquipment from "@/assets/clinic-equipment.jpg";
import clinicWaiting from "@/assets/clinic-waiting.jpg";

const images = [
  { src: clinicInterior, alt: "Modern treatment room at Raja Dental Clinic" },
  { src: clinicEquipment, alt: "Advanced dental equipment and sterilized instruments" },
  { src: clinicWaiting, alt: "Clean and comfortable waiting area" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-lg font-bold text-primary uppercase tracking-widest mb-4">Our Clinic</p>
        <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">
          A Glimpse Inside
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          Our modern, hygienic facility is equipped with the latest dental technology for your comfort and safety.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
