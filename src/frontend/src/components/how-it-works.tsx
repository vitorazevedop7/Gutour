import { MapPin, Users, Award } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Curated Routes",
    description: "We design every route to showcase Europe's most breathtaking roads and hidden gems",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate groups of maximum 8 riders ensure personalized attention and flexibility",
  },
  {
    icon: Award,
    title: "Premium Experience",
    description: "Handpicked accommodations, local cuisine, and expert guides who know every corner",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary/50 bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
