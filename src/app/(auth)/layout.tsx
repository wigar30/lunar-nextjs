'use client'
import { Raleway } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import '../globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} w-full h-full min-h-screen bg-primary-100 dark:bg-primary-800 `}>
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: 'text-sm',
            style: {
              color: '#325158'
            },
            duration: 3000,

            error: {
              style: {
                backgroundColor: '#fecaca',
                color: '#7f1d1d'
              }
            },
            success: {
              style: {
                backgroundColor: '#bbf7d0',
                color: '#14532a'
              }
            }
          }}
        />
        {children}
      </body>
    </html>
  )
}
