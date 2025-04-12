import { Block } from 'payload'
import { InfoCard } from '../InfoCard/config'

export const ScrollSection: Block = {
  slug: 'scroll',
  interfaceName: 'ScrollBlock',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [InfoCard],
      label: 'Content',
    },
  ],
}
