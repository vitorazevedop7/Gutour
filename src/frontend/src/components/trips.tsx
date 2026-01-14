import { TripCard } from "@/components/trip-card"

const trips = [
  {
    id: 1,
    title: "Italian Alps & Dolomites",
    location: "Italy",
    date: "June 2025",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 2,
    title: "Atlantic Coast Adventure",
    location: "Portugal",
    date: "September 2025",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 3,
    title: "Scottish Highlands",
    location: "Scotland",
    date: "July 2025",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 4,
    title: "Pyrenees Crossing",
    location: "Spain & France",
    date: "May 2025",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 5,
    title: "Norwegian Fjords",
    location: "Norway",
    date: "August 2025",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 6,
    title: "Swiss Alpine Passes",
    location: "Switzerland",
    date: "June 2025",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

export function Trips() {
  return (
    <section id="trips" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Trips</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {"Carefully designed routes across Europe's most spectacular landscapes"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  )
}
