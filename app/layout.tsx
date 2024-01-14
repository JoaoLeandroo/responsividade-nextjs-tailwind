import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const font = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Responsividade de telas',
  description: 'Treinando a responsividade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>

      <main>
        {children}
      </main>  
        
      </body>
    </html>
  )
}
