import Navbar from "@/components/ui/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Technologies from "@/components/sections/technologies";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
