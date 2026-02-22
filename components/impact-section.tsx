import {
  Target,
  Code,
  CloudUpload,
  Database,
  FileBarChart,
} from "lucide-react"

const stats = [
  { value: "8", label: "Protótipos funcionais" },
  { value: "8", label: "Deploys ativos" },
  { value: "48", label: "Talentos selecionados" },
  { value: "10h+", label: "Formação prática" },
]

const impacts = [
  {
    icon: Target,
    title: "Geração de leads técnicos qualificados",
    description:
      "Acesso a profissionais qualificados que demonstram habilidades reais em ambiente de alta pressão.",
  },
  {
    icon: Code,
    title: "Formação prática intensiva",
    description:
      "Participantes passam por treinamento hands-on com tecnologias cloud de mercado.",
  },
  {
    icon: CloudUpload,
    title: "Deploy real e funcional",
    description:
      "Cada equipe entrega um protótipo com deploy ativo, demonstrando capacidade técnica real.",
  },
  {
    icon: Database,
    title: "Banco de talentos",
    description:
      "Banco estruturado com perfil técnico de cada participante para futuras oportunidades.",
  },
  {
    icon: FileBarChart,
    title: "Relatório pós-evento",
    description:
      "Métricas de engajamento, perfil técnico consolidado e insights para patrocinadores.",
  },
]

export function ImpactSection() {
  return (
    <section className="bg-card py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-hacka-green/10 px-4 py-1.5 text-sm font-semibold text-hacka-green">
            Impacto e Diferenciais
          </span>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-hacka-black md:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Resultados que geram valor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            O Hacka GDGs Sul entrega mais do que exposição de marca. Cada edição
            gera resultados concretos e mensuráveis.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-hacka-green/20 bg-hacka-green/5 p-6 text-center"
            >
              <div
                className="text-4xl font-bold text-hacka-green md:text-5xl"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {stat.value}
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Impact cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-hacka-green/30 hover:shadow-md"
            >
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center rounded-lg bg-hacka-green/10 p-2.5">
                  <impact.icon className="h-5 w-5 text-hacka-green" />
                </div>
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-hacka-black">
                  {impact.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
