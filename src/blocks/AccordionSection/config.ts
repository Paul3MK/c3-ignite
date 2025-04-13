import { Block } from 'payload'

export const AccordionSection: Block = {
  slug: 'accordion-section',
  interfaceName: 'AccordionSection',
  fields: [
    {
      name: 'backgroundColor',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'faq-categories',
    },
  ],
}
