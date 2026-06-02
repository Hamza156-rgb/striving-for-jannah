import { Button } from "@/components/ui/button";
import { Download, Heart } from "lucide-react";

export const CTA = () => {
  return (
    <section id="cta" className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute inset-0 islamic-pattern opacity-25" aria-hidden />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-glow/30 rounded-full blur-3xl" aria-hidden />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="arabic text-2xl text-accent mb-5">ٱدْعُوا۟ رَبَّكُمْ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
              Begin your journey to <span className="text-gold-gradient">Jannah</span> today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Install the app and let every day bring you closer to Allah ﷻ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5" /> Download on Google Play
                </a>
              </Button>
              <Button variant="outlineGold" size="xl" asChild>
                <a href="#" rel="noopener noreferrer">
                  <Heart className="h-5 w-5" /> Follow the Page
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
