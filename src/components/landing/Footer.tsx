import { Facebook, Instagram, Mail, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.89 2.89 2.89 0 012.88-2.89c.3 0 .58.05.84.13V9.2a6.76 6.76 0 00-.84-.05A6.28 6.28 0 003.5 15.43a6.28 6.28 0 006.29 6.28 6.28 6.28 0 006.28-6.28v-6.9a8.17 8.17 0 004.77 1.52V6.7a4.85 4.85 0 01-3.25-.01z" />
  </svg>
);
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="" className="h-9 w-9 object-contain" width={36} height={36} />
              <span className="font-display font-bold text-xl">
                Striving <span className="text-gold-gradient">4</span> Jannah
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-4">
              A daily companion for every Muslim — sharing authentic Hadith, Quran verses and Islamic reminders.
            </p>
            <p className="arabic text-accent text-xl leading-relaxed">
              "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا"
            </p>
            <p className="text-sm text-primary-foreground/60 italic mt-1">"And whoever fears Allah — He will make for him a way out." — Quran 65:2</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Explore</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#app" className="hover:text-accent transition-colors">The App</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Connect</h3>
            <div className="flex gap-3 mb-4">
              {[Instagram, Facebook, Youtube, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/70">contact@striving4jannah.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Striving 4 Jannah. All rights reserved.</p>
          <p className="arabic text-accent text-base">جَزَاكُمُ ٱللَّٰهُ خَيْرًا</p>
        </div>
      </div>
    </footer>
  );
};
