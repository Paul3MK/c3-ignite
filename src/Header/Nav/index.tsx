'use client'

import React, { SetStateAction } from 'react'

import type { Header as HeaderType, Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{
  data: HeaderType
  menuFunction: React.Dispatch<SetStateAction<boolean>>
}> = ({ data, menuFunction }) => {
  const navItems = data?.navItems || []

  const pathname = usePathname()

  return (
    <nav className="flex md:flex-row flex-col gap-4 items-start md:items-center">
      {navItems.map(({ link }, i) => {
        const l = link.reference?.value as Page
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            size="lg"
            className={clsx('text-[1.312rem] text-[#ECF5F9]', {
              underline: l.slug == pathname.slice(1),
            })}
            onClick={() => menuFunction(false)}
          />
        )
      })}
    </nav>
  )
}
