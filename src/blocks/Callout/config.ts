import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Callout: Block = {
  slug: 'calloutBlock',
  interfaceName: 'Callout',
  fields: [
    {
      name: 'backgroundColor',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
      required: true,
    },
    {
      name: 'summaryText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
      required: true,
    },
    {
      name: 'CTAs',
      type: 'array',
      fields: [
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures],
          }),
        },
      ],
    },
  ],
}
