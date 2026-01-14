import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to Ride?</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Get in touch with us to learn more about our trips and availability
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Contact via WhatsApp
        </Button>
      </div>
    </section>
  )
}
