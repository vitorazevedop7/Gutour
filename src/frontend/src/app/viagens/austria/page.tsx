import Image from "next/image"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const itinerary = [
  {
    day: "Dia 1",
    title: "Munique — Museu da BMW",
    description:
      "Dia de chegada e ambientação. Visita ao Museu da BMW para entrar no clima das máquinas e da história do motociclismo.",
  },
  {
    day: "Dia 2",
    title: "Munique → Andorf → Salzburg (KTM + Motohall + Hangar)",
  },
  {
    day: "Dia 3",
    title: "Salzburg → Innsbruck (+200 km)",
  },
  {
    day: "Dia 4",
    title: "Innsbruck → Cortina d’Ampezzo (Timmelsjoch + Dolomitas)",
  },
  {
    day: "Dia 5",
    title: "Cortina d’Ampezzo → Spielberg (Red Bull Ring)",
  },
  {
    day: "Dia 6",
    title: "Spielberg → Eisenerz (Erzbergrodeo)",
  },
  {
    day: "Dia 7",
    title: "Erzbergrodeo — dia do evento",
  },
  {
    day: "Dia 8",
    title: "Eisenerz → Andorf → Munique (retorno)",
  },
]

const includes = [
  "Moto KTM 890 com malas, KM livre e seguro total",
  "Ingresso para 2 dias de Erzbergrodeo",
  "Transfer em van: Munique → Andorf / Andorf → Munique",
  "Entrada no KTM Motohall",
  "Hotéis (quarto duplo) (individual sob cotação)",
  "Kit promocional com brindes (inclui camisetas)",
  "Guia durante todo o percurso",
]

const excludes = [
  "GPS e dados móveis (cada participante deve ter o seu e saber usar)",
  "Gasolina",
  "Alimentação (café da manhã, almoço e jantar)",
  "Passagens aéreas e deslocamentos ferroviários até/da Europa",
  "Seguro pessoal de viagem (obrigatório, com cobertura para motociclismo)",
  "Equipamentos pessoais (capacete, jaqueta, luvas, botas, EPI)",
]

const gallery = [
  {
    src: "/images/2.jpg",
    alt: "Paisagens e estradas da viagem",
  },
  {
    src: "/images/6.jpg",
    alt: "Estradas e montanhas na Áustria",
  },
  {
    src: "/images/7.jpg",
    alt: "Motociclistas em rota alpina",
  },
  {
    src: "/images/8.jpg",
    alt: "Clima do evento Erzbergrodeo",
  },
]

export default function AustriaTripPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-80 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/#trips" className="text-sm text-muted-foreground hover:text-foreground">
            ← Voltar para Viagens
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Áustria</span>
                <span>•</span>
                <span>01 a 08 de Junho de 2026</span>
              </div>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">RedBull Erzbergrodeo</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Uma jornada premium pelo coração do motociclismo off-road europeu, com o maior Hard Enduro do mundo como
                ponto alto.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#roteiro"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Ver Roteiro
                </Link>
                <Link
                  href="#investimento"
                  className="inline-flex items-center justify-center rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary"
                >
                  Ver Investimento
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/20 backdrop-blur-md p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-foreground">Resumo rápido</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>Grupo pequeno: até 8 pilotos</li>
                <li>Moto KTM 890 com seguro total e KM livre</li>
                <li>2 dias de Erzbergrodeo</li>
                <li>Roteiro pelos Alpes + experiências KTM/Red Bull</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground">Sobre a experiência</h2>
          <div className="mt-6 space-y-4 text-muted-foreground max-w-3xl">
            <p>
              Esta viagem foi desenhada para quem quer viver a Europa em duas rodas com conforto, suporte e experiências
              exclusivas — culminando com 2 dias de acesso ao Erzbergrodeo, considerado o maior evento de hard enduro do
              mundo.
            </p>
            <p>
              Além das estradas alpinas e paisagens cinematográficas, o roteiro inclui momentos únicos no universo KTM e
              Red Bull: visita à fábrica da KTM, KTM Motohall e o Red Bull Hangar. Tudo em grupo reduzido (até 8 pilotos)
              para maximizar a experiência e a flexibilidade.
            </p>
            <p className="font-medium text-foreground">Dica: É possível levar acompanhante na garupa (sob organização prévia).</p>
          </div>
        </div>
      </section>

      <section id="roteiro" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Roteiro dia a dia</h2>
              <p className="mt-2 text-muted-foreground">Programação completa de 01 a 08 de Junho de 2026.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {itinerary.map((item) => (
              <div key={item.day} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-sm font-semibold text-primary">{item.day}</div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                {item.description ? <p className="mt-3 text-sm text-muted-foreground">{item.description}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground">O que inclui</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground">O que não inclui</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {excludes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                    <X className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">Opcional: disponibilizamos empresa parceira para compra das passagens.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-foreground">Cortesia especial</h2>
            <p className="mt-4 text-muted-foreground">
              Benefício exclusivo GUTOUR: possibilidade de encomendar produtos ACERBIS direto no preço de fábrica, com
              retirada em Viena ao final da viagem.
            </p>
            <p className="mt-4 text-muted-foreground">Ótima oportunidade para adquirir equipamentos premium com o menor preço.</p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-foreground">Detalhes importantes</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>Grupo limitado: máximo 8 pilotos (mais exclusividade e atenção ao grupo)</li>
              <li>Acompanhante: é possível levar na garupa (sob organização prévia)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="investimento" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-3xl font-bold text-foreground">Investimento</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm text-muted-foreground">por participante</p>
                <p className="text-3xl font-bold text-foreground">€ 4.900</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sinal de reserva</p>
                <p className="text-2xl font-semibold text-foreground">€ 900</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Saldo</p>
                <p className="text-2xl font-semibold text-foreground">€ 4.000</p>
                <p className="mt-1 text-sm text-muted-foreground">Prazo até 15 dias antes</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Valor considera hospedagem em apartamento duplo. (Individual sob cotação.)</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Galeria</h2>
              <p className="mt-2 text-muted-foreground">Algumas imagens para entrar no clima da viagem.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <div key={item.alt} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-primary/10 p-10 text-center">
            <h2 className="text-3xl font-bold text-foreground">Bora com a gente nessa aventura?</h2>
            <p className="mt-3 text-muted-foreground">Chame no WhatsApp para garantir vaga e receber todos os detalhes.</p>
            <a
              href="https://wa.me/5531988932691"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Contato via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
