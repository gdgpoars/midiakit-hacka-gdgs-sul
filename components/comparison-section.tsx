import { Check, Minus } from "lucide-react"

const rows = [
  { feature: "Logo na landing page", gold: true, silver: true },
  { feature: "Logo no backdrop", gold: true, silver: true },
  { feature: "Logo nos certificados", gold: true, silver: true },
  { feature: "Inclusão no aftermovie", gold: true, silver: true },
  { feature: "Menção na abertura e encerramento", gold: true, silver: true },
  { feature: "Post de agradecimento nas redes", gold: true, silver: true },
  { feature: "Mailing dos participantes (de acordo com opt-in)", gold: true, silver: true },
  { feature: "Relatório pós-evento", gold: true, silver: true },
  { feature: "Logo em destaque (maior proporção)", gold: true, silver: false },
  {
    feature: "Espaço de fala na abertura/encerramento",
    gold: true,
    silver: false,
  },
  { feature: "Ingressos participantes", gold: "2", silver: "1" },
  { feature: "Ingressos representantes", gold: "2", silver: "1" },
  { feature: "Mentor oficial indicado", gold: true, silver: false },
  { feature: "Integrante na banca avaliadora", gold: true, silver: false },
  { feature: "Brindes no kit do participante", gold: true, silver: false },
  {
    feature: "Perguntas no formulário de inscrição",
    gold: "Até 2",
    silver: false,
  },
  { feature: "Entrevista coletiva para redes sociais", gold: false, silver: true },
]

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return (
      <span className="text-sm font-semibold text-hacka-black">{value}</span>
    )
  }
  if (value) {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-hacka-green/10 p-1">
        <Check className="h-4 w-4 text-hacka-green" />
      </span>
    )
  }
  return <Minus className="h-4 w-4 text-muted-foreground/40" />
}

export function ComparisonSection() {
  return (
    <section className="bg-card py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-hacka-blue/10 px-4 py-1.5 text-sm font-semibold text-hacka-blue">
            Comparativo
          </span>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight text-hacka-black md:text-4xl text-balance"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Gold vs Silver
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border bg-hacka-gray">
                <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                  Beneficio
                </th>
                <th className="px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-hacka-yellow/15 px-3 py-1 text-sm font-bold text-hacka-black">
                    Gold
                  </span>
                </th>
                <th className="px-6 py-4 text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-hacka-blue/10 px-3 py-1 text-sm font-bold text-hacka-blue">
                    Silver
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border last:border-b-0 ${
                    i % 2 === 0 ? "bg-card" : "bg-hacka-gray/50"
                  }`}
                >
                  <td className="px-6 py-3.5 text-sm text-hacka-black">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.gold} />
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-center">
                    <div className="flex justify-center">
                      <CellValue value={row.silver} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
