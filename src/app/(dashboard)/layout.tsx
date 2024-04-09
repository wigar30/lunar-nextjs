'use client'

import { Raleway } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

import { Navbar } from '@/components/Navbar'

import '../globals.css'
import { SecurePageWrapper } from '@/components/PageWrapper/SecurePageWrapper'

import { Toaster } from 'react-hot-toast'
import { register } from 'swiper/element/bundle'

register()
const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} w-full bg-primary-50`}>
        <Toaster
          position="top-center"
          toastOptions={{
            className: 'text-sm',
            style: {
              color: '#325158'
            },
            duration: 3000,

            error: {
              position: 'bottom-center',
              style: {
                backgroundColor: '#fecaca',
                color: '#7f1d1d'
              }
            },
            success: {
              position: 'top-center',
              style: {
                backgroundColor: '#bbf7d0',
                color: '#14532a'
              }
            }
          }}
        />
        <Navbar />
        <AnimatePresence mode="wait">
          <SecurePageWrapper>{children}</SecurePageWrapper>
        </AnimatePresence>
      </body>
    </html>
  )
}
