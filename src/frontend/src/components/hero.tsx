"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const scrollToTrips = () => {
    const tripsSection = document.querySelector('#trips')
    if (tripsSection) {
      tripsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-start-playback-button]:hidden"
        style={{
          WebkitAppearance: 'none',
          pointerEvents: 'none'
        } as React.CSSProperties}
      >
        {isMobile ? (
          <source src="/videos/hero.webm" type="video/webm" />
        ) : (
          <>
            <source src="/videos/gutour_background.webm" type="video/webm" />
            <source src="/videos/gutour_background.mp4" type="video/mp4" />
          </>
        )}
      </video>
      
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
