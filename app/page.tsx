import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ImpactSection } from "@/components/impact-section"
import { ParticipantsSection } from "@/components/participants-section"
import { SponsorshipSection } from "@/components/sponsorship-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ExperienceSection } from "@/components/experience-section"
import { CtaSection } from "@/components/cta-section"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <ParticipantsSection />
      <SponsorshipSection />
      <ComparisonSection />
      <ExperienceSection />
      <CtaSection />
    </main>
  )
}
