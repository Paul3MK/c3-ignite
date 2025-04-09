import React from 'react'

import type { Page } from '@/payload-types'
import { FullHero } from './C3Full'
import { HalfHeightHero } from './C3Half'

const heroes = {
  full: FullHero,
  half: HalfHeightHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
