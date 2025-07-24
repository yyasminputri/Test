import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'HBD App',
  description: 'A special birthday site',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
