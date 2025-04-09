import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const IntroSection: Block = {
  slug: 'intro-section',
  interfaceName: 'IntroSection',
  fields: [
    {
      name: 'summaryText',
      type: 'richText',
      editor: lexicalEditor({
        features: () => {
          return [InlineToolbarFeature(), FixedToolbarFeature()]
        },
      }),
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [...defaultFeatures, InlineToolbarFeature(), FixedToolbarFeature()]
        },
      }),
      required: true,
    },
    {
      name: 'graphicText',
      type: 'text',
    },
    {
      name: 'accentColor',
      type: 'text',
      required: true,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: true,
    },
  ],
}
