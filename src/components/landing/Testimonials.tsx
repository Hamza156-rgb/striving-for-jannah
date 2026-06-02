import { Star } from "lucide-react";

const testimonials = [
  { name: "Ahmad R.", role: "London, UK", quote: "Subhanallah, this app has become part of my morning routine. The daily Hadith reminds me to live with purpose." },
  { name: "Fatima K.", role: "Toronto, CA", quote: "Beautiful, authentic and respectful. I love how clean and distraction-free it feels. JazakAllah khair to the team." },
  { name: "Yusuf A.", role: "Dubai, UAE", quote: "Finally an Islamic app that doesn't overwhelm you with features. Just pure benefit, every single day." },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/40 islamic-pattern">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Community</p>
          <h2 className="text-4xl md:text-5xl font-bold">Loved by Muslims <span className="text-gold-gradient">worldwide</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-card-gradient border border-border rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-all">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed italic mb-5">"{t.quote}"</blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-gradient flex items-center justify-center text-primary-foreground font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
