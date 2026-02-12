"use client"

import Image from "next/image"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { Header } from "@/components/header"
import { SocialMedia } from "@/components/social-media"
import { Footer } from "@/components/footer"

const itinerary = [
  {
    day: "Dia 0",
    date: "29.09",
    title: "Munique → Reunião do grupo + Jantar",
    description:
      "Chegada e ambientação. Encontro oficial do grupo, briefing rápido do roteiro e jantar de boas-vindas para alinhar horários, documentação e expectativas.",
  },
  {
    day: "Dia 1",
    date: "30.09",
    title: "Munique → Andorf → Munique (retirada das motos + início do roteiro)",
    description:
      "Transfer em van de aproximadamente 200 km até Andorf, na Áustria, para retirada das motocicletas. Em seguida, início da viagem sobre duas rodas com retorno a Munique para o primeiro pernoite do tour.",
  },
  {
    day: "Dia 2",
    date: "01.10",
    title: "Munique → Metz (França)",
    description:
      "Dia de deslocamento internacional rumo à França. Estradas rápidas e bem estruturadas, atravessando regiões centrais da Europa até a chegada em Metz para descanso e pernoite.",
  },
  {
    day: "Dia 3",
    date: "02.10",
    title: "Metz → Versalhes",
    description:
      "Seguimos pelo interior da França, aproximando o grupo da região de Paris. Chegada em Versalhes para pernoite, entrando no clima clássico e histórico do país.",
  },
  {
    day: "Dia 4",
    date: "03.10",
    title: "Versalhes → Ernée",
    description:
      "Dia de viagem rumo ao destino final. Chegada em Ernée, cidade sede do MXoN, com tempo para conhecer a região e entrar no clima do evento que se aproxima.",
  },
  {
    day: "Dia 5",
    date: "04.10",
    title: "Ernée → MXoN (primeiro dia de evento)",
    description:
      "Primeiro dia do Motocross of Nations. Início da programação oficial, reconhecimento do circuito, movimentação das equipes e primeiras baterias classificatórias.",
  },
  {
    day: "Dia 6",
    date: "05.10",
    title: "Ernée → MXoN (dia principal do evento)",
    description:
      "Dia principal do MXoN: provas decisivas, disputas entre as seleções nacionais e o ápice da competição. Atmosfera de estádio, torcidas organizadas e o espetáculo completo do maior evento de motocross do mundo.",
  },
  {
    day: "Dia 7",
    date: "06.10",
    title: "Ernée → Stuttgart (Alemanha)",
    description:
      "Início do retorno. Deixamos a França e seguimos rumo à Alemanha, com parada em Stuttgart para pernoite e descanso após os dias de evento.",
  },
  {
    day: "Dia 8",
    date: "07.10",
    title: "Stuttgart → Andorf (Áustria)",
    description:
      "Continuação do retorno atravessando a Alemanha de volta à Áustria. Chegada em Andorf para preparação do encerramento do tour.",
  },
  {
    day: "Dia 9",
    date: "08.10",
    title: "Andorf → Munique (encerramento do tour)",
    description:
      "Último dia da viagem: devolução das motocicletas em Andorf e transfer em van de volta a Munique. Despedida do grupo e encerramento oficial da experiência.",
  },
]

const includes = [
  "Moto KTM 890 com malas, KM livre e seguro total",
  "Ingresso para o MXoN (Ernée)",
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
    src: "/images/9.jpg",
    alt: "Paisagens e estradas da viagem",
  },
  {
    src: "/images/10.jpg",
    alt: "Estradas e montanhas na Europa",
  },
  {
    src: "/images/11.jpg",
    alt: "Motociclistas em rota europeia",
  },
  {
    src: "/images/12.jpg",
    alt: "Clima do evento MXoN Ernée",
  },
]

export default function ErneeTripPage() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      const headerHeight = 80 // Altura aproximada do header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-80 pb-16 bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/8.jpg"
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
                <span className="font-semibold text-primary">França</span>
                <span>•</span>
                <span>29 de Setembro a 08 de Outubro de 2026</span>
              </div>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">MXoN Ernée (Motocross of Nations)</h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Uma jornada premium pela Europa Central até a França, cruzando Áustria, Alemanha e território francês, com o MXoN (Motocross of Nations) em Ernée como ponto alto — atmosfera de estádio, nações reunidas e o maior evento de motocross do mundo.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#roteiro"
                  onClick={(e) => handleScrollToSection(e, '#roteiro')}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Ver Roteiro
                </Link>
                <Link
                  href="#investimento"
                  onClick={(e) => handleScrollToSection(e, '#investimento')}
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
                <li>Ingresso para o MXoN (Ernée)</li>
                <li>Roteiro por Áustria, Alemanha e França</li>
                <li>Estradas panorâmicas + imersão no maior evento internacional de motocross</li>
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
              Esta viagem foi desenhada para quem quer atravessar a Europa sobre duas rodas com conforto, suporte e um roteiro que mistura grandes deslocamentos internacionais com a experiência única de um evento gigantesco. O destino final é Ernée, na França, palco do Motocross of Nations (MXoN) — onde as maiores seleções do mundo se enfrentam em um clima de torcida e adrenalina.
            </p>
            <p>
              O trajeto conecta três países, passando por cidades estratégicas e regiões clássicas da Europa, com ritmo bem planejado para chegar ao evento no tempo certo e aproveitar a programação completa. Tudo em grupo reduzido (até 8 pilotos) para maximizar flexibilidade, segurança e experiência premium.
            </p>
            <p className="font-medium text-foreground">Dica: é possível levar acompanhante na garupa (sob organização prévia).</p>
          </div>
        </div>
      </section>

      <section id="roteiro" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Roteiro dia a dia</h2>
              <p className="mt-2 text-muted-foreground">Programação completa de 29 de Setembro a 08 de Outubro.</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {itinerary.map((item) => (
              <div key={`${item.day}-${item.date}`} className="rounded-2xl border border-border bg-card p-6">
                <div className="text-sm font-semibold text-primary">{item.day} — {item.date}</div>
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
              Benefício exclusivo GUTOUR: possibilidade de adquirir equipamentos pessoais para o piloto da marca ACERBIS diretamente a preço de fábrica.
            </p>
            <p className="mt-4 text-muted-foreground">
              Os equipamentos poderão ser encomendados antecipadamente, retirados no início da viagem e utilizados durante todo o roteiro, eliminando a necessidade de levar equipamentos do Brasil.
            </p>
            <p className="mt-4 text-muted-foreground">
              Ao final da experiência, o piloto retorna com seus equipamentos novos para casa, aproveitando a viagem para testar e trazer itens de alta qualidade com o melhor custo-benefício.
            </p>
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

      <SocialMedia />

      <section id="contact" className="py-16 bg-muted/30">
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
