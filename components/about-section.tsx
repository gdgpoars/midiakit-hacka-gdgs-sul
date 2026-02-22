import { Cloud, GraduationCap, Users, Handshake } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Ambiente inclusivo",
    description:
      "Espaço diverso que acolhe talentos de diferentes backgrounds e níveis de experiência.",
  },
  {
    icon: GraduationCap,
    title: "Formação prática",
    description:
      "Aprendizado mão na massa com tecnologias cloud utilizadas pelo mercado.",
  },
  {
    icon: Cloud,
    title: "Deploy obrigatório",
    description:
      "Todos os projetos devem ser entregues com deploy funcional e demonstração executável.",
  },
  {
    icon: Handshake,
    title: "Conexão com o mercado",
    description:
      "Plataforma que conecta talentos emergentes a empresas e oportunidades reais.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="bg-hacka-gray py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-hacka-blue/10 px-4 py-1.5 text-sm font-semibold text-hacka-blue">
            Sobre o evento
          </span>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-hacka-black md:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Mais do que um hackathon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            O Hacka GDGs Sul e uma maratona de inovação com foco em{" "}
            <strong className="text-hacka-blue">Cloud & Impacto</strong>,
            reunindo talentos diversos para desenvolver soluções escaláveis.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-hacka-blue/30 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-hacka-blue/10 p-3">
                <feature.icon className="h-6 w-6 text-hacka-blue" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-hacka-black">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Format timeline */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-hacka-blue/10 px-4 py-1.5 text-sm font-semibold text-hacka-blue">
              <span className="h-2 w-2 rounded-full bg-hacka-blue" />
              Sexta-feira — online
            </div>
            <h3
              className="mb-4 text-xl font-bold text-hacka-black"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Abertura e preparação
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hacka-blue" />
                Apresentação do desafio e subcategorias
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hacka-blue" />
                Regras, critérios e orientação técnica
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hacka-blue" />
                Configuração da plataforma Magalu Cloud
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-hacka-yellow/15 px-4 py-1.5 text-sm font-semibold text-hacka-black">
              <span className="h-2 w-2 rounded-full bg-hacka-yellow" />
              Sábado — presencial (08h-18h)
            </div>
            <h3
              className="mb-4 text-xl font-bold text-hacka-black"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Hackathon intensivo
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hacka-yellow" />
                8 horas intensivas de desenvolvimento
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hacka-yellow" />
                Rodadas estruturadas de mentoria
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-hacka-yellow" />
                Pitches avaliados por banca técnica
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
