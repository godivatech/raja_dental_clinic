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
            <span className="font-display text-xl text-background">Raja Dental</span>
          </div>
          <p className="text-base text-background/70 leading-relaxed font-medium">
            Your trusted multi-speciality dental clinic in Srivilliputhur. Advanced care, gentle hands, beautiful smiles.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl text-background mb-6">Quick Links</h4>
          <div className="space-y-4">
            {["Home", "About", "Services", "Gallery", "Reviews", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-lg text-background/70 hover:text-primary transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-background mb-6">Contact</h4>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin size={22} className="text-primary mt-0.5 shrink-0" />
              <span className="text-lg text-background/70 font-medium">Near Govt. Hospital, Srivilliputhur, TN</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={22} className="text-primary shrink-0" />
              <a href="tel:+919944034198" className="text-lg text-background/70 hover:text-primary transition-colors font-bold">
                +91 99440 34198
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-8 pt-6 text-center space-y-3">
        <p className="text-sm text-background/50 font-medium">
          © {new Date().getFullYear()} Raja Multi-Speciality Dental Clinic. All rights reserved.
        </p>
        <p className="text-sm text-background/50 font-medium">
          Designed and Developed by{" "}
          <a
            href="https://godivatech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-all"
          >
            Godiva tech
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
