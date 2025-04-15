import { Block } from 'payload'
import { InfoCard } from '../InfoCard/config'

export const GridSection: Block = {
  slug: 'grid',
  interfaceName: 'GridBlock',
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      blocks: [InfoCard],
      label: 'Content',
    },
  ],
}
