import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pronto para pilotar?</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
          Fale com a gente para saber mais sobre nossas viagens e disponibilidade
        </p>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-lg gap-2"
        >
          <a
            href="https://wa.me/5531988932691"
            target="_blank"
            rel="noreferrer"
            aria-label="Fale conosco no WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            Contato via WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
