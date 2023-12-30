'use client'
import { Raleway } from 'next/font/google'

import '../globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} w-full h-full min-h-screen bg-primary-100 dark:bg-primary-800 `}>{children}</body>
    </html>
  )
}
