import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import classic from "@/assets/template-classic.jpg";
import luxury from "@/assets/template-luxury.jpg";
import modern from "@/assets/template-modern.jpg";
import engagement from "@/assets/template-engagement.jpg";
import henna from "@/assets/template-henna.jpg";
import nikah from "@/assets/template-nikah.jpg";

const WHATSAPP_BASE = "https://wa.me/905347955999";

const templates = [
  {
    name: "Elara",
    category: "Klasik Düğün",
    description: "Altın detaylar ve zarif serif tipografi ile zamansız bir klasik.",
    img: classic,
    demo: "#",
  },
  {
    name: "Maison",
    category: "Lüks Düğün",
    description: "Mermer dokular, altın varak süslemeler ve editoryal bir his.",
    img: luxury,
    demo: "#",
  },
  {
    name: "Nova",
    category: "Modern Düğün",
    description: "Minimalist düzen, geniş tipografi ve sade renk paleti.",
    img: modern,
    demo: "#",
  },
  {
    name: "Rosé",
    category: "Nişan Davetiyesi",
    description: "Pudra tonları ve sulu boya çiçeklerle romantik bir dokunuş.",
    img: engagement,
    demo: "#",
  },
  {
    name: "Heves",
    category: "Kına Gecesi",
    description: "Bordo ve altın motiflerle geleneksel zarafetin modern yorumu.",
    img: henna,
    demo: "#",
  },
  {
    name: "Sade",
    category: "Nikah Davetiyesi",
    description: "Lacivert ve altın, sade çizgiler, kurumsal bir şıklık.",
    img: nikah,
    demo: "#",
  },
];

export function Templates() {
  return (
    <section id="tasarimlar" className="py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Öne Çıkan Tasarımlar"
          title="Her aşka özel bir tasarım"
          description="Klasikten moderne, lüksten minimaliste; tarzınızı en iyi yansıtan davetiye şablonunu keşfedin."
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-gold/60 transition-all duration-500 hover:shadow-[0_30px_60px_-30px_rgba(180,140,60,0.35)]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={t.img}
                  alt={`${t.name} davetiye şablonu`}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-gold font-medium">
                  {t.category}
                </span>
                <h3 className="font-serif text-2xl mt-3 text-foreground">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
                <a
                  href={t.demo}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group/btn hover:text-gold transition"
                >
                  Demo Görüntüle
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
                <a
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                    `Merhaba, "${t.name}" (${t.category}) davetiyesi hakkında bilgi almak istiyorum.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 ml-5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold transition"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                  Bilgi Al
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}