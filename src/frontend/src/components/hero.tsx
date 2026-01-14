import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">GUTOUR</h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">Premium Motorcycle Trips Across Europe</h2>
        <p className="text-lg md:text-xl text-white/80 mb-10">Iconic routes, small groups, curated experiences</p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-lg"
        >
          <Link href="#trips">View Trips</Link>
        </Button>
      </div>
    </section>
  )
}
