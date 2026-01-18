import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Trips } from "../components/trips"
import { HowItWorks } from "../components/how-it-works"
import { CTA } from "../components/cta"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Trips />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
