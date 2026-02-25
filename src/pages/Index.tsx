import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Hours = lazy(() => import("@/components/Hours"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main id="accueil" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Hours />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
