import Image from "next/image"

export function CtaSection() {
  return (
    <section id="contato" className="relative bg-hacka-dark py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-hacka-blue/8 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
        <img
          src="/test.png"
          alt="teste"
          style={{ width: '100px', height: 'auto' }}
        />
        </div>

        <h2
          className="text-3xl font-bold tracking-tight text-hacka-white md:text-4xl lg:text-5xl text-balance leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Empresas que investem em comunidade não apenas recrutam talentos -{" "}
          <span className="text-hacka-blue">
            constroem o futuro da tecnologia local.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-hacka-white/60 leading-relaxed">
          O investimento dos patrocinadores permite acessibilidade de
          ingressos, melhor estrutura, premiação mais atrativa e uma
          experiência mais profissional.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:gdgpoars@gmail.com"
            className="inline-flex items-center justify-center rounded-lg bg-hacka-yellow px-10 py-4 text-base font-bold text-hacka-black transition-all hover:brightness-110 hover:scale-105"
          >
            Fale com a organização
          </a>
          <a
            href="#cotas"
            className="inline-flex items-center justify-center rounded-lg border border-hacka-white/20 bg-hacka-white/5 px-10 py-4 text-base font-semibold text-hacka-white transition-all hover:bg-hacka-white/10"
          >
            Rever cotas
          </a>
        </div>

        {/* Organizadores */}
        <div className="mt-16 border-t border-hacka-white/10 pt-8">
          <p className="text-sm text-hacka-white/40 mb-2">Realização</p>
          <p className="text-sm font-medium text-hacka-white/60">
            GDG Porto Alegre + GDG Caxias do Sul
          </p>
        </div>
      </div>
    </section>
  )
}
