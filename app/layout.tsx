import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hacka GDGs Sul | Cloud & Impacto - Mídia Kit',
  description: 'Maratona de inovação com foco em Cloud & Impacto. 48 participantes, 8 equipes, deploy obrigatorio. Seja patrocinador do Hacka GDGs Sul.',
  keywords: ['hackathon', 'cloud', 'GDG', 'Porto Alegre', 'tecnologia', 'inovacao', 'patrocinio'],
  openGraph: {
    title: 'Hacka GDGs Sul | Cloud & Impacto',
    description: 'Maratona de inovação reunindo talentos diversos para desenvolver soluções escaláveis utilizando Cloud.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&family=Google+Sans+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}