'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <header
      className="container z-20 absolute left-0 right-0"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="py-8 flex justify-between items-center">
        <Link href="/">
          <Logo loading="eager" priority="high" className="" />
        </Link>
        <div className="hidden md:contents">
          <HeaderNav data={data} menuFunction={setMenuOpen} />
        </div>
        <div className="block md:hidden">
          <Menu onClick={() => setMenuOpen(!isMenuOpen)} className="text-white" />
        </div>
      </div>
      <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="w-full sm:w-full bg-[#26573C] max-w-none">
          <SheetHeader>
            <SheetTitle className="flex items-center justify-between">
              <Link href="/">
                <Logo />
              </Link>
              <SheetClose>
                <X color="white" />
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <div className="pt-8">
            <HeaderNav data={data} menuFunction={setMenuOpen} />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
