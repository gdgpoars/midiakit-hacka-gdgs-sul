"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cotas", label: "Cotas" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-hacka-dark/90 backdrop-blur-md border-b border-hacka-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo-hacka.png"
            alt="Hacka GDGs Sul"
            width={36}
            height={36}
          />
          <span className="text-sm font-bold text-hacka-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Hacka GDGs Sul
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-hacka-white/70 transition-colors hover:text-hacka-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotas"
            className="rounded-lg bg-hacka-yellow px-5 py-2 text-sm font-semibold text-hacka-black transition-all hover:brightness-110"
          >
            Patrocinar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-hacka-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-hacka-dark/95 backdrop-blur-md border-t border-hacka-white/10 px-6 py-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-hacka-white/70 transition-colors hover:text-hacka-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cotas"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-hacka-yellow px-5 py-3 text-center text-base font-semibold text-hacka-black transition-all hover:brightness-110"
            >
              Patrocinar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
