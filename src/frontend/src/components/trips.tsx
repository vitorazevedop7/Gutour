import { TripCard } from "@/components/trip-card"

const trips = [
  {
    id: 7,
    title: "RedBull Erzbergrodeo",
    location: "Áustria",
    countryFlag: "🇦🇹",
    date: "Junho 2026",
    image: "/images/2.jpg",
    featured: true,
    href: "/viagens/austria",
  },
  {
    id: 2,
    title: "RedBull Romaniacs",
    location: "Romênia",
    countryFlag: "🇷🇴",
    date: "Julho 2026",
    image: "/images/4.jpg",
    featured: true,
    href: "/viagens/romania",
  },
  {
    id: 3,
    title: "Moto GP",
    location: "Espanha",
    countryFlag: "🇪🇸",
    date: "Agosto 2026",
    image: "/images/5.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "MX ON Motocross das Nações",
    location: "França",
    countryFlag: "🇫🇷",
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nossas Viagens 2026</h2>
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
