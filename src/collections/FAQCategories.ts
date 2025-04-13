import { CollectionConfig } from 'payload'

export const FAQCategories: CollectionConfig = {
  slug: 'faq-categories',
  admin: {
    useAsTitle: 'category',
  },
  fields: [
    {
      name: 'category',
      type: 'text',
    },
  ],
}
