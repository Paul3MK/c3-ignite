'use client'

import type { GridBlock as GridBlockProps } from '@/payload-types'
import { Fragment, useRef } from 'react'
import { InfoCard } from '../InfoCard/Component'
import { motion, useTransform, useScroll, transform } from 'motion/react'

const blockComponents = {
  'info-card': InfoCard,
}

export const GridBlock: React.FC<GridBlockProps> = (props) => {
  if (props.layout) {
    return (
      <div className="overflow-x-clip w-full h-full">
        <section className="container mx-auto p-0 relative grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4 md:gap-8">
          <RenderGridBlock blocks={props.layout} />
        </section>
      </div>
    )
  }
}

const RenderGridBlock: React.FC<{ blocks: GridBlockProps['layout'] }> = (props) => {
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
                <div className="flex w-full" key={index}>
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
