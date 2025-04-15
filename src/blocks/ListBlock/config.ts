import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const ListBlock: Block = {
  slug: 'listBlock',
  interfaceName: 'ListBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        {
          label: 'Simple row',
          value: 'simple',
        },
        {
          label: 'Expanded row',
          value: 'expanded',
        },
      ],
      defaultValue: 'simple',
      required: true,
    },
    {
      name: 'content',
      type: 'array',
      fields: [
        {
          name: 'main',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => defaultFeatures,
          }),
          required: true,
        },
        {
          name: 'sub',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => defaultFeatures,
          }),
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'mediaPosition',
          type: 'number',
          admin: {
            condition: (_, { image }) => typeof image != 'undefined',
          },
        },
      ],
      required: true,
    },
  ],
}
