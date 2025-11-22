import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Component-Driven Development',
  description: 'Interactive component library and design system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
