import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main id="accueil" className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Hours />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
