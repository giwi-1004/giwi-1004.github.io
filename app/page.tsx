import { HeroSection } from "@/components/landing/hero-section"
import { WhyConsumerRightsSection } from "@/components/landing/why-consumer-rights-section"
import { QuickCheckSection } from "@/components/landing/quick-check-section"
import { TimelineSection } from "@/components/landing/timeline-section"
import { ExpertSection } from "@/components/landing/expert-section"
import { LeadFormSection } from "@/components/landing/lead-form-section"
import { KakaoSection } from "@/components/landing/kakao-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="ds-landing min-h-screen max-w-lg mx-auto bg-background overflow-x-hidden">
      <HeroSection />
      <WhyConsumerRightsSection />
      <QuickCheckSection />
      <TimelineSection />
      <ExpertSection />
      <LeadFormSection />
      <KakaoSection />
      <Footer />
    </main>
  )
}
