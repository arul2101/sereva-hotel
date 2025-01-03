import AboutUs from "@/components/LandingPage/AboutUs/AboutUs";
import BestOffers from "@/components/LandingPage/BestOffers/BestOffers";
import FAQ from "@/components/LandingPage/FAQ/FAQ";
import Hero from "@/components/LandingPage/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <BestOffers />
      <AboutUs />
      <FAQ />
    </>
  );
}
