import { GeistSans } from 'geist/font/sans'
import { ClientLayout } from '@/components/layout/ClientLayout'
import '@/styles/globals.css'

export const metadata = {
  title: 'Tom Jose Biju | Portfolio',
  description: 'Full-stack developer portfolio showcasing my journey through code and creativity.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
