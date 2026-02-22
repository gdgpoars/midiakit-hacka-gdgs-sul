import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hacka GDGs Sul | Cloud & Impacto - Media Kit',
  description: 'Maratona de inovacao com foco em Cloud & Impacto. 48 participantes, 8 equipes, deploy obrigatorio. Seja patrocinador do Hacka GDGs Sul.',
  keywords: ['hackathon', 'cloud', 'GDG', 'Porto Alegre', 'tecnologia', 'inovacao', 'patrocinio'],
  openGraph: {
    title: 'Hacka GDGs Sul | Cloud & Impacto',
    description: 'Maratona de inovacao reunindo talentos diversos para desenvolver solucoes escalaveis utilizando Cloud.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
