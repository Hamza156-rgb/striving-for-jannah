export const About = () => {
  return (
    <section id="about" className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-20" aria-hidden />
      <div className="container relative z-10 max-w-4xl text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">Our Mission</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Helping Muslims strengthen their faith and <span className="text-gold-gradient">strive for Jannah</span>
        </h2>
        <p className="arabic text-3xl md:text-4xl text-accent mb-8 leading-relaxed">
          وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ
        </p>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
          Striving 4 Jannah was created with one purpose: to make authentic Islamic knowledge accessible, beautiful and part of your everyday life. Through daily Hadith, Quranic reflections, and reminders, we hope to inspire hearts, plant seeds of taqwa, and walk with you on the path to Paradise — together.
        </p>
      </div>
    </section>
  );
};
