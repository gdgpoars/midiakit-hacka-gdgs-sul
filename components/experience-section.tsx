import {
  Coffee,
  MessagesSquare,
  Presentation,
  Camera,
  Award,
} from "lucide-react"

const experiences = [
  {
    icon: Coffee,
    title: "Coffee Break",
    description: "Manha e tarde, para networking e recarregar as energias.",
  },
  {
    icon: MessagesSquare,
    title: "Mentorias Estruturadas",
    description: "2 rodadas com mentores especializados para guiar as equipes.",
  },
  {
    icon: Presentation,
    title: "Pitch Final",
    description: "Apresentacao para banca tecnica com feedback qualificado.",
  },
  {
    icon: Camera,
    title: "Registro Audiovisual",
    description: "Fotos e video profissional para aftermovie e redes sociais.",
  },
  {
    icon: Award,
    title: "Certificacao Digital",
    description:
      "Certificados emitidos para todos os participantes e mentores.",
  },
]

export function ExperienceSection() {
  return (
    <section className="bg-hacka-gray py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-hacka-blue/10 px-4 py-1.5 text-sm font-semibold text-hacka-blue">
            Experiencia do Evento
          </span>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-hacka-black md:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Uma experiencia completa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Cada detalhe foi pensado para garantir uma experiencia profissional e
            memoravel para participantes e patrocinadores.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-hacka-blue/30 hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center rounded-lg bg-hacka-blue/10 p-3">
                  <exp.icon className="h-5 w-5 text-hacka-blue" />
                </div>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-hacka-black">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Kit callout */}
        <div className="mt-12 rounded-xl border border-hacka-yellow/30 bg-hacka-yellow/5 p-8 text-center">
          <h3
            className="mb-2 text-lg font-bold text-hacka-black"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Kit do Participante
          </h3>
          <p className="text-muted-foreground">
            Cracha personalizado + adesivos exclusivos + brindes dos
            patrocinadores
          </p>
        </div>
      </div>
    </section>
  )
}
