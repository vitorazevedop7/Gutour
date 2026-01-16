import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Trips } from "@/components/trips"
import { HowItWorks } from "@/components/how-it-works"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Trips />
      <HowItWorks />
      <CTA />
      <Footer />
      <a
        href="https://wa.me/5531988932691"
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat"
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:bg-primary/90"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </main>
  )
}
