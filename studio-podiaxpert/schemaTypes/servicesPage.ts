import { defineField, defineType } from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  type: 'document',
  title: 'Services Page',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' })
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'metaTitle', type: 'string', title: 'Meta Title' }),
        defineField({ name: 'metaDescription', type: 'text', title: 'Meta Description' }),
        defineField({
          name: 'metaTags',
          title: 'Meta Tags (Keywords)',
          type: 'array',
          of: [{ type: 'string' }]
        })
      ]
    })
  ],
  preview: {
    select: {
      subtitle: 'hero.heading'
    },
    prepare({ subtitle }) {
      return {
        title: 'Services Page',
        subtitle: subtitle ? `Hero: ${subtitle}` : 'Edit services page content'
      }
    }
  }
})
