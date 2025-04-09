import { Block } from 'payload'

export const Events: Block = {
  slug: 'events',
  interfaceName: 'EventsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'pageSize',
      type: 'number',
    },
  ],
}
