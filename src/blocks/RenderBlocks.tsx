import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { PeopleCard } from './PeopleCard/Component'
import { IntroSection } from './Intro/Component'
import { EventsBlock } from './Events/Component'
import { ScrollBlock } from './ScrollSection/Component'
import { SermonBlock } from './SermonBlock/Component'
import { CalloutBlock } from './Callout/Component'
import { AccordionSection } from './AccordionSection/Component'
import { TextSection } from './TextSection/Component'
import { GridBlock } from './GridSection/Component'
import { ListBlock } from './ListBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  'people-card': PeopleCard,
  'intro-section': IntroSection,
  events: EventsBlock,
  scroll: ScrollBlock,
  sermons: SermonBlock,
  calloutBlock: CalloutBlock,
  'accordion-section': AccordionSection,
  'text-section': TextSection,
  grid: GridBlock,
  listBlock: ListBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block && index == blocks.length - 1) {
              return (
                <div className="mt-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            } else if (Block) {
              return (
                <div className="my-16" key={index}>
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
