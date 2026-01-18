import { TripCard } from "@/components/trip-card"

const trips = [
  {
    id: 7,
    title: "RedBull Erzbergrodeo",
    location: "Áustria",
    date: "Junho 2026",
    image: "/images/8.jpg",
    featured: true,
    href: "/viagens/austria",
  },
  {
    id: 1,
    title: "Enduro GP",
    location: "Portugal",
    date: "Junho 2026",
    image: "/images/3.jpg",
    featured: false,
  },
  {
    id: 2,
    title: "RedBull Romaniacs",
    location: "Romênia",
    date: "Julho 2026",
    image: "/images/4.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Moto GP",
    location: "Espanha",
    date: "Agosto 2026",
    image: "/images/5.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "MX ON Motocross das Nações",
    location: "França",
    date: "Outubro 2026",
    image: "/images/6.jpg",
    featured: false,
  },
]

export function Trips() {
  return (
    <section id="trips" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nossas viagens</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {"Rotas cuidadosamente planejadas pelos cenários mais espetaculares da Europa"}
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
