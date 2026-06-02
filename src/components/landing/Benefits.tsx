import { ShieldCheck, BookMarked, Wifi } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Authentic Content", desc: "Every Hadith is sourced from Sahih collections and verified Islamic references — no compromises on accuracy." },
  { icon: BookMarked, title: "Daily Learning", desc: "Build a consistent habit of seeking knowledge with bite-sized lessons designed to fit into your busy day." },
  { icon: Wifi, title: "Convenient Access", desc: "Read online or offline, anytime, anywhere — your spiritual companion is always with you." },
];

export const Benefits = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold">Built on <span className="text-gold-gradient">trust and tradition</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="relative p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all overflow-hidden group">
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors" />
              <b.icon className="h-10 w-10 text-accent relative mb-5" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-3 relative">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed relative">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
