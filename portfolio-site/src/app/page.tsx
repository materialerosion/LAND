import StarBackground from "@/components/StarBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AppsShowcase from "@/components/AppsShowcase";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed animated star / nebula background */}
      <StarBackground />

      {/* Main scrollable content */}
      <main>
        <Hero />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <AppsShowcase />

        <div className="section-divider" />
        <Testimonials />

        <Footer />
      </main>
    </>
  );
}
