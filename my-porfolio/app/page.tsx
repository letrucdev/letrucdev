import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { MilestonesSection } from "@/components/MilestonesSection";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <TechStack />
        <ProjectsSection />
        <MilestonesSection />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
