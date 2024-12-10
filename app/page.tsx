import Footer from "@/components/Footer";
import AboutUs from "@/components/LandingPage/AboutUs";
import BestOffers from "@/components/LandingPage/BestOffers";
import FAQ from "@/components/LandingPage/FAQ";
import Hero from "@/components/LandingPage/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <BestOffers />
      <AboutUs />
      <FAQ />
      <Footer />
    </>
  );
}
