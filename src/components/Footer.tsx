import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold font-display">R</span>
            </div>
            <span className="font-display text-lg text-background">Raja Dental</span>
          </div>
          <p className="text-sm text-background/60 leading-relaxed">
            Your trusted multi-speciality dental clinic in Srivilliputhur. Advanced care, gentle hands, beautiful smiles.
          </p>
        </div>

        <div>
          <h4 className="font-display text-background mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Services", "Gallery", "Reviews", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-background/60 hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-background mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-background/60">Near Govt. Hospital, Srivilliputhur, TN</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+919944034198" className="text-sm text-background/60 hover:text-primary transition-colors">
                +91 99440 34198
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-8 pt-6 text-center">
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Raja Multi-Speciality Dental Clinic. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
