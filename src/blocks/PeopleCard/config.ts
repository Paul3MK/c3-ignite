import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const PeopleCard: Block = {
  slug: 'people-card',
  interfaceName: 'PeopleCard',
  fields: [
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'personName',
      type: 'text',
    },
    {
      name: 'personTitle',
      type: 'text',
    },
    {
      name: 'accentColor',
      type: 'text',
    },
    {
      name: 'backgroundColor',
      type: 'text',
    },
    {
      name: 'textContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [...defaultFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
  ],
}
