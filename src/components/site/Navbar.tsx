import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#tasarimlar", label: "Tasarımlar" },
  { href: "#portfolyo", label: "Portfolyo" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#iletisim", label: "İletişim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full border border-gold/60 flex items-center justify-center group-hover:bg-gold/10 transition">
            <Heart className="w-4 h-4 text-gold" strokeWidth={1.5} />
          </span>
          <span className="font-serif text-xl tracking-wide text-foreground">
            Davetiye<span className="text-gold">.</span>Studio
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium tracking-wide text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/905347955999?text=Merhaba%2C%20teklif%20almak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide rounded-full bg-foreground text-background hover:bg-gold transition-colors"
        >
          Teklif Al
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü"
          className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="px-6 py-6 space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/905347955999?text=Merhaba%2C%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block text-center mt-4 px-6 py-3 rounded-full bg-foreground text-background"
              >
                Teklif Al
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}