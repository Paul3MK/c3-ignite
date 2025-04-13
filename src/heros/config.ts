import type { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'full',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Full',
          value: 'full',
        },
        {
          label: 'Half-height',
          value: 'half',
        },
      ],
      required: true,
    },
    {
      name: 'displayText',
      type: 'text',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'mediaPosition',
      type: 'number',
      defaultValue: 30,
      required: true,
    },
  ],
  label: false,
}
