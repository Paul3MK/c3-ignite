import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const InfoCard: Block = {
  slug: 'info-card',
  interfaceName: 'InfoCard',
  fields: [
    {
      name: 'cardCaption',
      type: 'text',
      required: true,
    },
    {
      name: 'cardDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'link',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'cardImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: '#00719C',
      required: true,
    },
  ],
}
