'use client'
import { useEffect, useState } from "react"
import clsx from "clsx"

import { Text } from "@/components/Base/Text" 
import { useRouter } from "next/navigation"

export default function Page() {
  const [animate, setAnimate] = useState(false)
  const [animateDestroy, setAnimateDestroy] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setAnimate(true)
  }, [])

  const handleClickToLogin = () => {
    setAnimateDestroy(true)
  }
  const handleAnimationEnd = () => {
    if (!animateDestroy) return

    router.push('/login')
  }
  return (
    <main className="w-full h-screen bg-primary-100 dark:bg-primary-800">
      <section className="w-full h-full flex flex-nowrap relative">
        <div className={clsx([animate ? 'w-1/3' : 'w-full'], [animateDestroy ? 'w-full' : 'w-1/3'], 'h-full transition-all delay-100 duration-300 bg-primary-200 dark:bg-primary-800 flex-none absolute left-0')} onTransitionEnd={handleAnimationEnd} />
        <div className="w-1/3 h-full" />
        <div className={clsx('w-2/3 h-full bg-primary-950 dark:bg-primary-50 transition-all flex flex-col items-start px-4 py-8')}>
          <Text className="text-6xl pointer-events-none select-none" weight="medium">Lunar</Text>
          <Text className="text-sm pointer-events-none select-none" weight="normal">Gabung di marketplace untuk dapatkan beragam keuntungan</Text>

          <div className="w-full flex justify-center mt-6 space-x-1">
            <Text className="text-xs flex">Sudah Punya Akun? </Text>
            <Text className="text-xs cursor-pointer" onClick={handleClickToLogin}>Login Sekarang</Text>
          </div>
        </div>
      </section>
    </main>
  )
}