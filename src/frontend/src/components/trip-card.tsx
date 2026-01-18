"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, X } from "lucide-react"
import { useState } from "react"

interface Trip {
  id: number
  title: string
  location: string
  countryFlag?: string
  date: string
  image: string
  featured: boolean
  href?: string
}

export function TripCard({ trip }: { trip: Trip }) {
  const [showModal, setShowModal] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const handleUnavailableClick = () => {
    setShowModal(true)
    setIsClosing(false)
  }

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowModal(false)
      setIsClosing(false)
    }, 200)
  }

  const cardContent = (
    <>
      <div className="aspect-[4/3] relative">
        <Image
          src={trip.image || "/placeholder.svg"}
          alt={trip.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-1.5 mb-2">
          {trip.countryFlag && <span className="text-lg">{trip.countryFlag}</span>}
          <MapPin className="w-4 h-4 text-white/90" />
          <span className="text-white/90 text-sm font-medium">{trip.location}</span>
        </div>
        <h3 className="text-2xl font-bold mb-1 text-white">{trip.title}</h3>
        <p className="text-white/70 text-sm">{trip.date}</p>
      </div>
    </>
  )

  if (trip.href) {
    return (
      <Link
        href={trip.href}
        className="group relative overflow-hidden rounded-2xl bg-card transition-transform hover:-translate-y-1"
      >
        {cardContent}
      </Link>
    )
  }

  return (
    <>
      <button
        type="button"
        onClick={handleUnavailableClick}
        className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer text-left w-full transition-transform hover:-translate-y-1"
      >
        {cardContent}
      </button>

      {showModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative bg-card border border-border rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="text-center">
              <div className="mb-4 flex items-center gap-2 justify-center">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{trip.title}</h3>
              </div>
              
              <p className="text-muted-foreground text-lg mb-6">
                Esta viagem ainda está sendo pensada e planejada. Em breve traremos mais detalhes.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
