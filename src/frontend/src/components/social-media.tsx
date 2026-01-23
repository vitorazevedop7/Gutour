import { Instagram, Youtube } from "lucide-react"

export function SocialMedia() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Instagram Card */}
          <div className="relative overflow-hidden rounded-2xl bg-transparent border border-border p-8 transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Siga-nos no Instagram</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Confira fotos e vídeos das nossas viagens incríveis.
            </p>
            <a
              href="https://www.instagram.com/gutourmototurismo/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all"
            >
              <Instagram className="w-5 h-5" />
              Seguir @gutourmototurismo
            </a>
          </div>

          {/* YouTube Card */}
          <div className="relative overflow-hidden rounded-2xl bg-transparent border border-border p-8 transition-transform hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Se inscreva no YouTube</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Assista vídeos das nossas aventuras de moto pela Europa.
            </p>
            <a
              href="https://www.youtube.com/@gutourmototurismo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold transition-all"
            >
              <Youtube className="w-5 h-5" />
              Inscreva-se Gutour Mototurismo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
