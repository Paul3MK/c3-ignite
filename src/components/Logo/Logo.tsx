import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="C3 Ignite Logo"
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-24 md:max-w-[9.375rem] w-full h-10 md:h-[60px]', className)}
      src="/ignite-white.svg"
    />
  )
}
