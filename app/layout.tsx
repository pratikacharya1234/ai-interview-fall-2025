import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Interview Platform',
  description: 'Revolutionary AI-powered interview preparation platform',
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