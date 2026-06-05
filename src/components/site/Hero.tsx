import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";
import classic from "@/assets/turki.png";
import luxury from "@/assets/template-classicc.jpg";
import modern from "@/assets/template-modern.jpg";
import engagement from "@/assets/template-engagement.jpg";
import henna from "@/assets/template-henna.jpg";

const WHATSAPP =
  "https://wa.me/905347955999?text=" +
  encodeURIComponent("Merhaba, davetiye tasarımları hakkında bilgi almak istiyorum.");

const slides = [
  {
    img: classic,
    title: "Ztoyntop & Mtohmtot",
    subtitle: "Altın detaylar ve serif tipografi ile zamansız bir tasarım.",
    demo: "https://weddydev22.netlify.app/",
  },
  {
    img: luxury,
    title: "Elif & Kerem",
    subtitle: "Mermer dokular ve altın varak ile editoryal bir his.",
    demo: "https://weddydev23.netlify.app/",
  }
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1200}
          className="w-full h-full object-cover opacity-60 lg:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="gold-divider"
          >
            <span className="gold-divider-line" />
            Premium Dijital Davetiye
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif mt-6 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground"
          >
            Aşkınızı anlatan{" "}
            <span className="italic text-gold">zarif</span> bir davetiye
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            Hayalinizdeki düğün gününü unutulmaz kılan, modern ve lüks dijital
            davetiye web siteleri tasarlıyoruz. Misafirlerinizle ilk
            karşılaşmanız bir sanat eseri olsun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#tasarimlar"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:bg-gold transition-all hover:gap-3"
            >
              Şablonları İncele
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 text-foreground text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
              Bilgi Al
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative w-full max-w-md mx-auto lg:max-w-none"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border/60 shadow-[0_40px_100px_-30px_rgba(180,140,60,0.4)] bg-secondary">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.img}
                src={current.img}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="font-serif text-white text-2xl sm:text-3xl leading-tight">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80 max-w-sm">
                    {current.subtitle}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <a
                      href={current.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gold text-foreground text-xs font-medium tracking-wide hover:bg-white transition"
                    >
                      Demo Görüntüle
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/40 text-white text-xs font-medium tracking-wide hover:bg-white/10 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Bilgi Al
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slayt ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold" : "w-4 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}