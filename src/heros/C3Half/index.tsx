'use client'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HalfHeightHero: React.FC<Page['hero']> = ({ displayText, media }) => {
  return (
    <div className="relative -mt-[10.4rem] flex items-center justify-center text-white">
      <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-center">
          {displayText && <h1 className="mb-6 font-headline text-5xl">{displayText}</h1>}
        </div>
      </div>
      <div className="min-h-[40vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
