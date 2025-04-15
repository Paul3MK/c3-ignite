import { Block } from 'payload'

export const AccordionSection: Block = {
  slug: 'accordion-section',
  interfaceName: 'AccordionSection',
  fields: [
    {
      name: 'backgroundColor',
      type: 'text',
      required: true,
      defaultValue: '#00000000',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'faq-categories',
      required: true,
    },
    {
      name: 'contentColor',
      type: 'text',
      defaultValue: '#181818',
      required: true,
    },
  ],
}
