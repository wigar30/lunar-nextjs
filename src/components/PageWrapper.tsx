'use client'

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      className='w-full h-full min-h-screen'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.div>
  )
}
