import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#hero" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full border border-gold flex items-center justify-center">
              <Heart className="w-4 h-4 text-gold" strokeWidth={1.5} />
            </span>
            <span className="font-serif text-xl tracking-wide">
              Davetiye<span className="text-gold">.</span>Studio
            </span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-background/70">
            Türkiye'nin en şık dijital düğün davetiyesi tasarım stüdyosu. Aşkınıza
            yakışan bir dijital deneyim için buradayız.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold">Bağlantılar</h4>
          <ul className="mt-5 space-y-3 text-sm text-background/80">
            {[
              ["Ana Sayfa", "#hero"],
              ["Tasarımlar", "#tasarimlar"],
              ["Portfolyo", "#portfolyo"],
              ["Hakkımızda", "#hakkimizda"],
              ["İletişim", "#iletisim"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-gold transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold">Bizi Takip Edin</h4>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Sosyal medya"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-gold hover:text-gold transition"
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-background/70">info@davetiyestudio.com</p>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Davetiye Studio. Tüm hakları saklıdır.</p>
          <p>Aşkla tasarlandı, Türkiye'de.</p>
        </div>
      </div>
    </footer>
  );
}