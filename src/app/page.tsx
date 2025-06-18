import About from "@/components/pages/home/About";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import Skills from "@/components/pages/home/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Services />
    </div>
  );
}
