import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import { FeatureSection } from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-landing-bg dark:bg-landing-bg-dark">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeatureSection />
      <CTASection />
    </main>
  );
}
