import { BookOpen, Compass, Bell, GraduationCap, ScrollText, Navigation } from "lucide-react";

const features = [
  { icon: ScrollText, title: "Daily Hadith", desc: "Authentic Hadith from Sahih collections delivered to you every day." },
  { icon: BookOpen, title: "Quran Verses", desc: "Beautiful Quranic verses with translation and reflection." },
  { icon: Compass, title: "Qibla Direction", desc: "Accurate compass to find the Qibla wherever you are." },
  { icon: GraduationCap, title: "Islamic Knowledge", desc: "Curated articles on Aqeedah, Fiqh, Seerah and more." },
  { icon: Bell, title: "Daily Reminders", desc: "Gentle notifications to keep your heart connected with Allah." },
  { icon: Navigation, title: "Easy Navigation", desc: "Minimal, distraction-free design built for daily use." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 islamic-pattern">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything for your <span className="text-gold-gradient">spiritual journey</span></h2>
          <p className="text-muted-foreground text-lg">A complete companion designed with authenticity and simplicity in mind.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative bg-card-gradient border border-border rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="w-14 h-14 rounded-xl bg-emerald-gradient flex items-center justify-center mb-5 shadow-elegant group-hover:scale-110 transition-transform">
                <f.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
