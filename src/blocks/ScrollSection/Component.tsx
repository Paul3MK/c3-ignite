'use client'

import type { ScrollBlock as ScrollBlockProps } from '@/payload-types'
import { Fragment, useRef } from 'react'
import { InfoCard } from '../InfoCard/Component'
import { motion, useTransform, useScroll, transform } from 'motion/react'

const blockComponents = {
  'info-card': InfoCard,
}

export const ScrollBlock: React.FC<ScrollBlockProps> = (props) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const trackHeight = props.layout ? (props.layout?.length + 1) * 100 : 1
  const transformLimit = props.layout ? (props.layout?.length - 1) * 100 : 0
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${transformLimit}%`])
  if (props.layout) {
    return (
      <div className="overflow-x-clip w-full h-full">
        <section
          ref={targetRef}
          className="container mx-auto p-0 relative"
          style={{ height: `${trackHeight}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center">
            <motion.div style={{ translateX: x }} className="flex gap-4 w-full">
              <RenderScrollBlock blocks={props.layout} />
            </motion.div>
          </div>
        </section>
      </div>
    )
  }
}

const RenderScrollBlock: React.FC<{ blocks: ScrollBlockProps['layout'] }> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16 flex-shrink-0 flex w-full" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
