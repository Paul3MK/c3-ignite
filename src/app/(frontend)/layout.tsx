import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import localFont from 'next/font/local'

const galgo = localFont({
  src: '../../../public/GalgoVF.ttf',
  variable: '--font-galgo',
})

const uncutSans = localFont({
  src: '../../../public/UncutSans-Variable.ttf',
  variable: '--font-uncut-sans',
})

const instrumentSerif = localFont({
  src: [
    {
      path: '../../../public/InstrumentSerif-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/InstrumentSerif-Italic.ttf',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-instrument-serif',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(instrumentSerif.variable, uncutSans.variable, galgo.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/ignite-favicon.ico" rel="icon" sizes="32x32" />
        <link href="/ignite-favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
