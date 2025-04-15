'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const FullHero: React.FC<Page['hero']> = ({ displayText, media, mediaPosition }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })
  return (
    <div className="relative flex items-end justify-center text-white bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]">
      <div className="container mb-8 z-10 relative flex items-end">
        <div className="max-w-[60%] md:max-w-[24rem] leading-[0.7]">
          {displayText && (
            <h1 className="font-headline text-[5.625rem] md:text-[7.5rem] uppercase">
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
