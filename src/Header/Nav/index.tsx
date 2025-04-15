'use client'

import React, { SetStateAction } from 'react'

import type { Header as HeaderType, Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'

export const HeaderNav: React.FC<{
  data: HeaderType
  menuFunction: React.Dispatch<SetStateAction<boolean>>
}> = ({ data, menuFunction }) => {
  const navItems = data?.navItems || []

  const pathname = usePathname()

  return (
    <motion.nav
      className="flex md:flex-row flex-col gap-4 items-start md:items-center"
      variants={{ load: { transition: { staggerChildren: 0.1 } } }}
      animate={'load'}
    >
      {navItems.map(({ link }, i) => {
        const l = link.reference?.value as Page
        return (
          <span key={i} className="block overflow-clip">
            <motion.span
              initial={{ translateY: 40 }}
              variants={{
                load: { translateY: 0, transition: { type: 'spring', bounce: 0, duration: 0.5 } },
              }}
              className="inline-block"
            >
              <CMSLink
                {...link}
                appearance="link"
                size="lg"
                className={clsx('text-[1.312rem] text-[#ECF5F9]', {
                  underline: l.slug == pathname.slice(1),
                })}
                onClick={() => menuFunction(false)}
              />
            </motion.span>
          </span>
        )
      })}
    </motion.nav>
  )
}
