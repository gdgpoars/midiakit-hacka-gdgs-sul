import { Check } from "lucide-react"

const goldFeatures = [
  "Patrocinador oficial (Powered by)",
  "Logo em destaque (maior proporção) em todas as artes",
  "Menção nas aberturas (online e presencial)",
  "Espaço de fala de até 2 min na abertura e encerramento",
  "2 ingressos cortesia para participantes",
  "2 ingressos para representantes da empresa",
  "Indicação de 1 mentor oficial",
  "1 integrante na banca avaliadora",
  "Inclusão de brindes no kit",
  "Mailing dos participantes (de acordo com opt-in)",
  "Inclusão de até 2 perguntas no formulário de inscrição",
  "Relatório pós-evento completo",
]

const silverFeatures = [
  "Empresa apoiadora do evento",
  "Logo na landing page, backdrop e certificados",
  "Inclusão no aftermovie",
  "Menção na abertura e encerramento",
  "Post de agradecimento nas redes",
  "1 ingresso cortesia para participante",
  "1 ingresso para representante",
  "Mailing dos participantes (de acordo com opt-in)",
  "Inclusão no relatório pós-evento",
  "Entrevista coletiva para redes sociais",
]

export function SponsorshipSection() {
  return (
    <section id="cotas" className="bg-hacka-dark py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-hacka-yellow/15 px-4 py-1.5 text-sm font-semibold text-hacka-yellow">
            Cotas de patrocínio
          </span>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-hacka-white md:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Invista no ecossistema tech!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-hacka-white/60 leading-relaxed">
            Empresas que apoiam o evento não apenas ganham visibilidade — elas
            participam da construção do ecossistema tech da região.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Gold Card */}
          <div className="relative rounded-2xl border-2 border-hacka-yellow/40 bg-hacka-white/[0.03] p-8 md:p-10">
            {/* Badge */}
            <div className="absolute -top-4 left-8">
              <span className="rounded-full bg-hacka-yellow px-4 py-1.5 text-sm font-bold text-hacka-black">
                Mais estratégica
              </span>
            </div>

            <div className="mb-6 mt-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-hacka-yellow">
                Cota Gold
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className="text-5xl font-bold text-hacka-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  R$ 1.000
                </span>
              </div>
              <p className="mt-1 text-sm text-hacka-white/50">1 vaga disponível</p>
            </div>

            <div className="mb-8 h-px bg-hacka-white/10" />

            <ul className="mb-8 space-y-3">
              {goldFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-hacka-white/80"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-hacka-yellow" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="block w-full rounded-lg bg-hacka-yellow px-6 py-3.5 text-center text-base font-semibold text-hacka-black transition-all hover:brightness-110"
            >
              Quero ser patrocinador Gold
            </a>
          </div>

          {/* Silver Card */}
          <div className="relative rounded-2xl border border-hacka-white/10 bg-hacka-white/[0.03] p-8 md:p-10">
            {/* Badge */}
            <div className="absolute -top-4 left-8">
              <span className="rounded-full bg-hacka-white/10 px-4 py-1.5 text-sm font-bold text-hacka-white">
                Ótimo custo-benefício
              </span>
            </div>

            <div className="mb-6 mt-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-hacka-white/60">
                Cota Silver
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className="text-5xl font-bold text-hacka-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  R$ 600
                </span>
              </div>
              <p className="mt-1 text-sm text-hacka-white/50">2 vagas disponíveis</p>
            </div>

            <div className="mb-8 h-px bg-hacka-white/10" />

            <ul className="mb-8 space-y-3">
              {silverFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-hacka-white/80"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-hacka-blue" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="block w-full rounded-lg border border-hacka-white/20 bg-hacka-white/5 px-6 py-3.5 text-center text-base font-semibold text-hacka-white transition-all hover:bg-hacka-white/10"
            >
              Quero ser patrocinador Silver
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
