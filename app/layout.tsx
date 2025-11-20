import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pokémon Community - Pokédex',
  description: 'Découvrez tous les Pokémon avec notre Pokédex interactif',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

