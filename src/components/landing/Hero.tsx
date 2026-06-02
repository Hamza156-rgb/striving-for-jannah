import { Button } from "@/components/ui/button";
import { Download, Heart, Sparkles } from "lucide-react";
import heroPattern from "@/assets/hero-pattern.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-hero-gradient">
      <div
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{ backgroundImage: `url(${heroPattern})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40 dark:to-background/60" aria-hidden />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Daily Islamic Reminders
          </div>

          <p className="arabic text-2xl md:text-3xl text-accent mb-4">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] tracking-tight">
            Striving <span className="text-gold-gradient">4</span> Jannah
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Daily Hadith, Quran guidance and spiritual reminders — crafted to help every Muslim grow in faith and strive for Paradise.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl" asChild>
              <a href="#cta">
                <Download className="h-5 w-5" />
                Download App
              </a>
            </Button>
            <Button variant="outlineGold" size="xl" asChild>
              <a href="#cta">
                <Heart className="h-5 w-5" />
                Follow the Page
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start text-primary-foreground/70 text-sm">
            <div><span className="font-bold text-accent text-2xl">10k+</span><br />Muslims joined</div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div><span className="font-bold text-accent text-2xl">365</span><br />Daily reminders</div>
            <div className="w-px h-10 bg-primary-foreground/20 hidden sm:block" />
            <div className="hidden sm:block"><span className="font-bold text-accent text-2xl">4.9★</span><br />App rating</div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full animate-glow" aria-hidden />
            <div className="relative w-72 h-72 rounded-full border-2 border-accent/40 flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-accent/20" />
              <div className="absolute inset-10 rounded-full border border-accent/10" />
              <p className="arabic text-7xl text-gold-gradient text-center leading-none">ٱللَّٰه</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
