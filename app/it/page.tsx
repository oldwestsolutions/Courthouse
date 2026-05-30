import { ComplianceStrip } from "@/components/courthouse-it/ComplianceStrip";
import { Footer } from "@/components/courthouse-it/Footer";
import { Hero } from "@/components/courthouse-it/Hero";
import { HowItWorks } from "@/components/courthouse-it/HowItWorks";
import { KnowledgeBase } from "@/components/courthouse-it/KnowledgeBase";
import { Navigation } from "@/components/courthouse-it/Navigation";
import { SelfService } from "@/components/courthouse-it/SelfService";
import { SlaStrip } from "@/components/courthouse-it/SlaStrip";
import { TicketQueue } from "@/components/courthouse-it/TicketQueue";

export default function ItPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <HowItWorks />
        <KnowledgeBase />
        <TicketQueue />
        <SelfService />
        <SlaStrip />
        <ComplianceStrip />
      </main>
      <Footer />
    </>
  );
}
