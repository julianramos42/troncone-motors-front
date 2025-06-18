import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Troncone Motors',
  description: 'Troncone Motors - Tu concesionario de confianza',
  generator: 'Julián Ramos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
