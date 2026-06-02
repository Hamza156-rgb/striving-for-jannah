import { Check, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockup from "@/assets/app-mockup.png";

const points = [
  "Beautifully designed for daily reading",
  "Offline access to saved Hadith & verses",
  "Light & dark themes for comfortable reading",
  "Bookmark, share and reflect with one tap",
];

export const AppShowcase = () => {
  return (
    <section id="app" className="py-24 bg-secondary/40">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" aria-hidden />
          <img
            src={mockup}
            alt="Striving 4 Jannah Android app screenshot"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The App</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your daily companion <br /><span className="text-gold-gradient">in your pocket</span></h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Built for Android with care — the Striving 4 Jannah app makes it effortless to stay connected to the words of Allah and His Messenger ﷺ throughout your day.
          </p>

          <ul className="space-y-4 mb-10">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-gradient">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </span>
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <Button variant="emerald" size="lg" asChild>
            <a href="#cta">
              <Smartphone className="h-5 w-5" />
              Get it on Google Play
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
