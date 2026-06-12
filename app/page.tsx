import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import LeaderShip from "@/components/LeaderShip";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FadeUp>
        <Services />
      </FadeUp>

      <FadeUp>
        <Projects />
      </FadeUp>

      <FadeUp>
        <AboutUs />
      </FadeUp>

      <FadeUp>
        <Contact />
      </FadeUp>

      <FadeUp>
        <LeaderShip />
      </FadeUp>

      

      <Footer />
    </>
  );
}