"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [canAutoplay, setCanAutoplay] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onPlay = () => setIsVideoPlaying(true)
    const onPause = () => setIsVideoPlaying(false)

    video.addEventListener("playing", onPlay)
    video.addEventListener("pause", onPause)
    video.addEventListener("ended", onPause)

    // iOS gosta de muted/playsInline setados via JS também
    video.muted = true
    ;(video as any).playsInline = true

    video.play()
      .then(() => setCanAutoplay(true))
      .catch(() => {
        setCanAutoplay(false)   // <- não mostrar o <video>
        setIsVideoPlaying(false)
      })

    return () => {
      video.removeEventListener("playing", onPlay)
      video.removeEventListener("pause", onPause)
      video.removeEventListener("ended", onPause)
    }
  }, [])

  const scrollToTrips = () => {
    document.querySelector("#trips")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Poster base */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-poster.png)" }}
      />

      {/* Só renderiza vídeo se autoplay funcionar */}
      {canAutoplay && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero-poster.png"
          className="absolute inset-0 w-full h-full object-cover"
          controls={false}
        >
          <source src="/videos/gutour_background.mp4" type="video/mp4" />
          <source src="/videos/gutour_background.webm" type="video/webm" />
        </video>
      )}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo/logobranca.png"
            alt="GUTOUR"
            width={400}
            height={120}
            className="w-auto h-24 md:h-32"
            priority
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-semibold text-white mb-4">Viagens premium de moto pela Europa</h2>
        <p className="text-lg md:text-xl text-white/80 mb-10">Rotas icônicas, grupos pequenos, experiências selecionadas</p>
        <Button
          onClick={scrollToTrips}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg rounded-lg"
        >
          Ver viagens
        </Button>
      </div>
    </section>
  )
}
