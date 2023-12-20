'use client'
import { Raleway } from 'next/font/google'

import { Navbar } from './components/Navbar'

import '../globals.css'
import { SessionProvider } from 'next-auth/react'

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} w-full h-full min-h-screen bg-primary-100 dark:bg-primary-800 `}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
