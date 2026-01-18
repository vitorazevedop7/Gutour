"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

interface Trip {
  id: number
  title: string
  location: string
  date: string
  image: string
  featured: boolean
  href?: string
}

export function TripCard({ trip }: { trip: Trip }) {
  const handleUnavailableClick = () => {
    window.alert("Esta viagem ainda está sendo pensada e planejada. Em breve traremos mais detalhes.")
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
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">{trip.location}</span>
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
    <button
      type="button"
      onClick={handleUnavailableClick}
      className="group relative overflow-hidden rounded-2xl bg-card cursor-pointer text-left"
    >
      {cardContent}
    </button>
  )
}
