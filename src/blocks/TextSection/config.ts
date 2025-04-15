import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const TextSection: Block = {
  slug: 'text-section',
  interfaceName: 'TextSection',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => defaultFeatures,
      }),
      required: true,
    },
  ],
}
