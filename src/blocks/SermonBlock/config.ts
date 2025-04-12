import { Block } from 'payload'

export const SermonBlock: Block = {
  slug: 'sermons',
  interfaceName: 'sermonBlock',
  fields: [
    {
      name: 'videos',
      type: 'array',
      fields: [
        {
          name: 'sermonDate',
          type: 'date',
        },
        {
          name: 'speaker',
          type: 'text',
        },
        {
          name: 'sermonTitle',
          type: 'text',
        },
        {
          name: 'thumbnail',
          type: 'ui',
          admin: {
            components: {
              Field: '/blocks/SermonBlock/ThumbnailPicker',
            },
          },
        },
      ],
      required: true,
    },
  ],
}
