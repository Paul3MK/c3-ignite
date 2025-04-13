'use client'

import React from 'react'

import type { Header as HeaderType, Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const pathname = usePathname()

  return (
    <nav className="flex gap-3 items-center text-[21px]">
      {navItems.map(({ link }, i) => {
        const l = link.reference?.value as Page
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className={clsx({ underline: l.slug == pathname.slice(1) })}
          />
        )
      })}
    </nav>
  )
}
