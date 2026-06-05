import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

type Filter = "Tümü" | "Klasik" | "Modern" | "Premium" | "Lüks";

const projects: { title: string; couple: string; category: Exclude<Filter, "Tümü">; img: string; demo: string }[] = [
  { title: "Bahçe Düğünü", couple: "Elif & Mert", category: "Klasik", img: p1, demo: "#" },
  { title: "Mermer Zarafeti", couple: "Selin & Kaan", category: "Lüks", img: p2, demo: "#" },
  { title: "Pudra Hikayesi", couple: "Ayşe & Burak", category: "Modern", img: p3, demo: "#" },
  { title: "Botanik Defter", couple: "Defne & Emre", category: "Klasik", img: p4, demo: "#" },
  { title: "Altın Çerçeve", couple: "İrem & Ali", category: "Premium", img: p5, demo: "#" },
  { title: "Zümrüt Salon", couple: "Naz & Cem", category: "Lüks", img: p6, demo: "#" },
];

const filters: Filter[] = ["Tümü", "Klasik", "Modern", "Premium", "Lüks"];

export function Portfolio() {
  const [active, setActive] = useState<Filter>("Tümü");
  const items = active === "Tümü" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolyo" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Portfolyo"
          title="Gerçek hikayeler, gerçek davetiyeler"
          description="Bizimle çalışan çiftlere özel olarak tasarladığımız bazı projeler."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                active === f
                  ? "bg-foreground text-background"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.demo}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
                className="group mb-6 break-inside-avoid block relative overflow-hidden rounded-2xl bg-card border border-border/60 hover:border-gold/60 transition-all duration-500"
              >
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.couple}`}
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-gold-soft">
                    {p.category}
                  </span>
                  <h3 className="font-serif text-2xl text-background mt-2">{p.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm text-background/80">{p.couple}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-background">
                      Demo <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}