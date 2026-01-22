"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsVideoPlaying(true)
    const handlePause = () => setIsVideoPlaying(false)
    const handleEnded = () => setIsVideoPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('playing', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)

    // Tentar reproduzir
    video.muted = true
    video.play().catch(error => {
      console.log('Autoplay bloqueado:', error)
      setIsVideoPlaying(false)
    })

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('playing', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
    }
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
      {/* Poster sempre visível quando vídeo não está tocando */}
      <div 
        className="absolute inset-0 w-full h-full object-cover bg-cover bg-center transition-opacity duration-500"
        style={{ 
          backgroundImage: 'url(/images/hero-poster.png)',
          opacity: isVideoPlaying ? 0 : 1,
          pointerEvents: 'none'
        }}
      />
      
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        poster="/images/hero-poster.png"
        className="absolute inset-0 w-full h-full object-cover"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/videos/gutour_background.mp4" type="video/mp4" />
        <source src="/videos/gutour_background.webm" type="video/webm" />
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
