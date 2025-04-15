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
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => defaultFeatures,
      }),
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
    },
    {
      name: 'backgroundColor',
      type: 'text',
      defaultValue: '#00719C',
      required: true,
    },
    {
      name: 'contentColor',
      type: 'text',
      defaultValue: '#ECF5F9',
      required: true,
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        {
          label: 'Full width',
          value: 'fullWidth',
        },
        {
          label: 'Chip',
          value: 'chip',
        },
      ],
      defaultValue: 'fullWidth',
      required: true,
    },
  ],
}
