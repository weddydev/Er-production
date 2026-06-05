import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section
      id="iletisim"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(60% 80% at 50% 0%, color-mix(in oklab, var(--gold) 14%, transparent) 0%, transparent 60%), linear-gradient(to bottom, var(--ivory), var(--background))",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <span className="gold-divider">
            <span className="gold-divider-line" />
            İletişim
            <span className="gold-divider-line" />
          </span>
          <h2 className="font-serif mt-6 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
            Hayalinizdeki Dijital Düğün
            <br />
            Davetiyesini Birlikte Oluşturalım
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Bilgilerinizi bırakın, 24 saat içinde size özel tasarım önerilerimizle dönelim.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-14 bg-card border border-border/60 rounded-3xl p-8 lg:p-12 shadow-[0_30px_80px_-40px_rgba(180,140,60,0.35)]"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Ad Soyad" name="name" value={form.name} onChange={handle} />
            <Field label="Telefon" name="phone" type="tel" value={form.phone} onChange={handle} />
          </div>
          <div className="mt-5">
            <Field label="E-posta" name="email" type="email" value={form.email} onChange={handle} />
          </div>
          <div className="mt-5">
            <label className="block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
              Mesaj
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              rows={4}
              placeholder="Düğün tarihi, tema veya tarzınız hakkında kısa bilgi..."
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none transition resize-none"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-foreground text-background text-sm font-medium tracking-wide hover:bg-gold transition"
            >
              <Send className="w-4 h-4" />
              Teklif Al
            </button>
            <a
              href="https://wa.me/905347955999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-foreground/20 text-foreground text-sm font-medium tracking-wide hover:border-gold hover:text-gold transition"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none transition"
      />
    </div>
  );
}