import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/919944034198?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    animate={{ y: [0, -6, 0] }}
    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-card" />
  </motion.a>
);

export default FloatingWhatsApp;
