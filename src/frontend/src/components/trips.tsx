import { TripCard } from "@/components/trip-card"

const trips = [
  {
    id: 1,
    title: "Alpes Italianos e Dolomitas",
    location: "Itália",
    date: "Junho 2025",
    image: "/images/2.jpg",
    featured: false,
  },
  {
    id: 2,
    title: "Aventura na Costa Atlântica",
    location: "Portugal",
    date: "Setembro 2025",
    image: "/images/3.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Terras Altas da Escócia",
    location: "Escócia",
    date: "Julho 2025",
    image: "/images/4.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Travessia dos Pireneus",
    location: "Espanha e França",
    date: "Maio 2025",
    image: "/images/5.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Fiordes Noruegueses",
    location: "Noruega",
    date: "Agosto 2025",
    image: "/images/6.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Passos Alpinos Suíços",
    location: "Suíça",
    date: "Junho 2025",
    image: "/images/7.jpg",
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
