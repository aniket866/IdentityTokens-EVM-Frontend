import { HowItWorks } from "@/components/HowItWorks";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-landing-bg">
      <Hero />
      <HowItWorks />
      <FeatureSection />
      <CTASection />
    </main>
  );
}
