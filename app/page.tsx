import Hero from "@/components/Hero";
import VisionFooter from "@/components/VisionFooter";
import LeadCompound from "@/components/LeadCompound";
import DisneyRules from "@/components/DisneyRules";
import SynergyMap from "@/components/SynergyMap/SynergyMap";
import Governance from "@/components/Governance";

export default function Home() {
  return (
    <main>
      <Hero />
      <VisionFooter />
      <LeadCompound />
      <DisneyRules />
      <SynergyMap />
      <Governance />
      {/* <Priorities /> — hidden until Q2 goals are finalized */}
    </main>
  );
}
