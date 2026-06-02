import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#app", label: "App" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 md:h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Striving 4 Jannah" className="h-9 w-9 object-contain" width={36} height={36} />
          <span className="font-display font-bold text-lg md:text-xl tracking-tight">
            Striving <span className="text-gold-gradient">4</span> Jannah
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="emerald" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#cta">Download</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
