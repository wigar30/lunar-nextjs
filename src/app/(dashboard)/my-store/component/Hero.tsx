'use client'

import { useLayoutEffect, useState } from 'react'
import Close from '/public/icons/close.svg'
import { Icon } from '@/components/Base/Icon'

export const Hero = () => {
  const [isHide, setIsHide] = useState(true)

  useLayoutEffect(() => {
    const isOptOut = window.localStorage.getItem('heroOptOut')
    if (isOptOut === 'true') {
      setIsHide(true)
    } else {
      setIsHide(false)
    }
  }, [])

  const handleCloseHero = () => {
    window.localStorage.setItem('heroOptOut', 'true')
    setIsHide(true)
  }
  return (
    <>
      {!isHide && (
        <section className="w-full relative">
          <div className="w-full h-28 border-2 border-dashed border-primary-900 rounded-xl p-1 peer/close">
            <div className="w-full h-full border-4 border-primary-900 rounded-lg p-2 flex items-center justify-center">
              <Icon icon="store" className="text-primary-900 text-[40px]" />
              this goes hero banner
            </div>
          </div>
          <div className="absolute -right-1 -top-1 p-0.5 cursor-pointer bg-primary-400 rounded-full hidden peer-hover/close:block hover:block" onClick={handleCloseHero}>
            <Close className="text-primary-800 w-5 h-5" />
          </div>
        </section>
      )}
    </>
  )
}
