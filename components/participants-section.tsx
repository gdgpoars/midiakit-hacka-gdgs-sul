import {
  Monitor,
  Server,
  BarChart3,
  Palette,
  Box,
  Briefcase,
} from "lucide-react"

const profiles = [
  {
    icon: Monitor,
    label: "Front-end",
    color: "bg-hacka-blue/10 text-hacka-blue",
  },
  {
    icon: Server,
    label: "Back-end",
    color: "bg-hacka-blue/10 text-hacka-blue",
  },
  {
    icon: BarChart3,
    label: "Dados",
    color: "bg-hacka-green/10 text-hacka-green",
  },
  {
    icon: Palette,
    label: "UX",
    color: "bg-hacka-yellow/15 text-hacka-black",
  },
  {
    icon: Box,
    label: "Produto",
    color: "bg-hacka-yellow/15 text-hacka-black",
  },
  {
    icon: Briefcase,
    label: "Negócios",
    color: "bg-hacka-green/10 text-hacka-green",
  },
]

export function ParticipantsSection() {
  return (
    <section className="bg-hacka-gray py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-hacka-blue/10 px-4 py-1.5 text-sm font-semibold text-hacka-blue">
            Perfil dos participantes
          </span>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-hacka-black md:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            48 talentos selecionados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Equipes formadas estrategicamente para garantir equilíbrio técnico,
            diversidade e alto potencial de entrega.
          </p>
        </div>

        {/* Profile grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {profiles.map((profile) => (
            <div
              key={profile.label}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-hacka-blue/30 hover:shadow-md"
            >
              <div
                className={`mb-4 inline-flex items-center justify-center rounded-xl p-4 ${profile.color}`}
              >
                <profile.icon className="h-7 w-7" />
              </div>
              <span className="text-sm font-semibold text-hacka-black">
                {profile.label}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge categories */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8 md:p-10">
          <h3
            className="mb-6 text-xl font-bold text-hacka-black md:text-2xl"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Subcategorias do Desafio
          </h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            Soluções escaláveis utilizando Cloud para resolver problemas reais
            com uso obrigatório de ao menos um recurso da Magalu Cloud.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {[
              "Inclusão digital",
              "Impacto social",
              "Eficiência para PMEs",
              "Educação",
            ].map((category) => (
              <div
                key={category}
                className="rounded-lg border border-hacka-blue/20 bg-hacka-blue/5 px-4 py-3 text-center text-sm font-medium text-hacka-blue"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
