import { HeroSection } from "@/components/landing/hero-section"
import { WhyInvestigationSection } from "@/components/landing/why-investigation-section"
import { WhyConsumerRightsSection } from "@/components/landing/why-consumer-rights-section"
import { ExpertSection } from "@/components/landing/expert-section"
import { LeadFormSection } from "@/components/landing/lead-form-section"
import { KakaoSection } from "@/components/landing/kakao-section"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="min-h-screen max-w-lg mx-auto bg-background overflow-x-hidden">
      <HeroSection />
      <WhyInvestigationSection />
      <WhyConsumerRightsSection />
      <ExpertSection />
      <section className="px-6 py-14 bg-white">
        <a href="#lead-form" className="block">
          <Button className="w-full h-16 px-6 text-[20px] font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[22px] shadow-sm shadow-[#2563EB]/20">
            소비자선임권 가능 여부 확인하기
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </section>
      <LeadFormSection />
      <KakaoSection />
      <Footer />
    </main>
  )
}
