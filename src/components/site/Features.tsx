import { motion } from "framer-motion";
import { Smartphone, Share2, Sparkles, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: Smartphone,
    title: "Mobil Uyumlu Tasarımlar",
    text: "Her cihazda kusursuz görünen, akıcı ve hızlı davetiye deneyimleri.",
  },
  {
    icon: Share2,
    title: "WhatsApp ile Kolay Paylaşım",
    text: "Tek bir bağlantı ile tüm misafirlerinize anında ulaşın.",
  },
  {
    icon: Sparkles,
    title: "Modern ve Şık Görünüm",
    text: "Editoryal kalite, lüks tipografi ve özenle seçilmiş renk paletleri.",
  },
  {
    icon: Zap,
    title: "Hızlı ve Kolay Erişim",
    text: "Tek tıkla açılır, kayıt gerekmez. Misafirleriniz için zahmetsiz.",
  },
];

export function Features() {
  return (
    <section id="hakkimizda" className="py-28 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Neden Dijital Davetiye?"
          title="Kağıt yerine, kalıcı bir hatıra"
          description="Dijital davetiye sadece bir bildirim değil; misafirlerinizle paylaştığınız ilk anıdır."
        />

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-card rounded-2xl p-8 border border-border/60 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(180,140,60,0.4)]"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-500">
                <f.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}