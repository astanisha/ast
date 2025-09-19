import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
