import { Contact } from "@/components/site/Contact";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { Portfolio } from "@/components/site/Portfolio";
import { Templates } from "@/components/site/Templates";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Templates />
        <Features />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
