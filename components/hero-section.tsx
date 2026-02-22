import Image from "next/image"
import { MapPin, Calendar, Users, Rocket } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hacka-dark overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#2876CC 1px, transparent 1px), linear-gradient(90deg, #2876CC 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hacka-blue/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-hacka-yellow/8 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/logo/logo-hacka.png"
            alt="Logo Hacka GDGs Sul - Cloud and Impacto"
            width={220}
            height={220}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-hacka-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Hacka GDGs Sul
          <span className="block mt-2 text-hacka-blue">Cloud & Impacto</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-hacka-white/70 leading-relaxed md:text-xl">
          Maratona de inovação reunindo talentos diversos para desenvolver
          soluções escaláveis utilizando recursos de Cloud.
        </p>

        {/* Info badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <InfoBadge icon={<MapPin className="h-4 w-4" />} text="Faculdade Dom Bosco - Porto Alegre/RS" />
          <InfoBadge icon={<Calendar className="h-4 w-4" />} text="Sexta (online) + Sabado (presencial)" />
          <InfoBadge icon={<Users className="h-4 w-4" />} text="48 participantes selecionados" />
          <InfoBadge icon={<Rocket className="h-4 w-4" />} text="8 equipes multidisciplinares" />
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#sobre"
            className="inline-flex items-center justify-center rounded-lg border border-hacka-white/20 bg-hacka-white/5 px-8 py-4 text-base font-semibold text-hacka-white transition-all hover:bg-hacka-white/10"
          >
            Conhecer o evento
          </a>
          <a
            href="#cotas"
            className="inline-flex items-center justify-center rounded-lg bg-hacka-yellow px-8 py-4 text-base font-semibold text-hacka-black transition-all hover:brightness-110 hover:scale-105"
          >
            Quero patrocinar
          </a>
        </div>

        {/* Powered by */}
        <p className="mt-16 text-sm text-hacka-white/40">
          Powered by <span className="text-hacka-white/60 font-medium">Faculdade Dom Bosco</span> &bull;{" "}
          <span className="text-hacka-white/60 font-medium">Magalu Cloud</span>
        </p>
      </div>
    </section>
  )
}

function InfoBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-hacka-white/10 bg-hacka-white/5 px-4 py-2 text-sm text-hacka-white/80">
      <span className="text-hacka-blue">{icon}</span>
      {text}
    </div>
  )
}
