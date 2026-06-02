import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is the Striving 4 Jannah app free to use?", a: "Yes, the app is completely free. Our mission is to make Islamic knowledge accessible to every Muslim, with no paywalls or subscriptions." },
  { q: "Is the Hadith content authentic?", a: "Absolutely. Every Hadith is carefully selected from authentic collections such as Sahih al-Bukhari, Sahih Muslim and other verified sources, with references included." },
  { q: "Which devices is the app available on?", a: "The app is currently available for Android via the Google Play Store. An iOS version is being considered for the future, inshaAllah." },
  { q: "Do I need an internet connection?", a: "An internet connection is needed to receive daily updates, but bookmarked content remains available offline for your convenience." },
  { q: "How do you choose the daily content?", a: "Content is curated by knowledgeable volunteers and reviewed for authenticity, relevance and benefit to the everyday Muslim." },
  { q: "How can I support the project?", a: "Share the app with friends and family, leave a review on the Play Store, and most importantly — make du'a for the team and the ummah." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently <span className="text-gold-gradient">asked questions</span></h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-5 bg-card shadow-soft">
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
