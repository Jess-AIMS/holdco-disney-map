import Hero from "@/components/Hero";
import LeadCompound from "@/components/LeadCompound";
import DisneyRules from "@/components/DisneyRules";
import SynergyMap from "@/components/SynergyMap/SynergyMap";
import Governance from "@/components/Governance";
import Priorities from "@/components/Priorities";
import VisionFooter from "@/components/VisionFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <LeadCompound />
      <DisneyRules />
      <SynergyMap />
      <Governance />
      <Priorities />
      <VisionFooter />
    </main>
  );
}
