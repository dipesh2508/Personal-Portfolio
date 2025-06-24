import { Suspense, lazy } from "react";
import Hero from "@/components/pages/home/Hero";

// Lazy load components that are below the fold
const About = lazy(() => import("@/components/pages/home/About"));
const Skills = lazy(() => import("@/components/pages/home/Skills"));
const Services = lazy(() => import("@/components/pages/home/Services"));

// Simple loading component
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-pulse">
      <div className="h-32 bg-gray-200 rounded-md"></div>
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero loads immediately as it's above the fold */}
      <Hero />

      {/* Below the fold components are lazy loaded */}
      <Suspense fallback={<ComponentLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <Services />
      </Suspense>
    </div>
  );
}
