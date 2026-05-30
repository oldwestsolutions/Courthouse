import { CaseFeed } from "@/components/courthouse/CaseFeed";
import { ComplianceStrip } from "@/components/courthouse/ComplianceStrip";
import { Footer } from "@/components/courthouse/Footer";
import { ForAttorneys } from "@/components/courthouse/ForAttorneys";
import { Hero } from "@/components/courthouse/Hero";
import { HowItWorks } from "@/components/courthouse/HowItWorks";
import { Navigation } from "@/components/courthouse/Navigation";
import { WhyCourthouse } from "@/components/courthouse/WhyCourthouse";

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <WhyCourthouse />
        <CaseFeed />
        <ForAttorneys />
        <ComplianceStrip />
      </main>
      <Footer />
    </>
  );
}
