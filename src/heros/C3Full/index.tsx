'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useRef } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import * as st from 'split-type'
import { useAnimate } from 'motion/react'

export const FullHero: React.FC<Page['hero']> = ({ displayText, media, mediaPosition }) => {
  const { setHeaderTheme } = useHeaderTheme()
  const target = useRef(null)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  useEffect(() => {
    if (target.current) {
      const split = st.default.create(target.current, { tagName: 'span' })
      if (split.lines) {
        // animate(split.lines, {translate: 20}, {duration: 1} )
      }
    }
  }, [target])

  return (
    <div className="relative flex items-end justify-center text-white bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]">
      <div className="container mb-8 z-10 relative flex items-end">
        <div ref={scope} className="max-w-[60%] md:max-w-[24rem] leading-[0.7]">
          {displayText && (
            <h1 ref={target} className="font-headline text-[5.625rem] md:text-[7.5rem] uppercase">
              {displayText}
            </h1>
          )}
        </div>
      </div>
      <div className="min-h-[90vh] select-none">
        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="-z-10 object-cover"
            priority
            resource={media}
            style={{ objectPosition: `center ${mediaPosition}%` }}
          />
        )}
      </div>
    </div>
  )
}
