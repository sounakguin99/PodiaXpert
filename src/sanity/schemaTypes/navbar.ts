import { defineField, defineType } from 'sanity'

export const navbar = defineType({
  name: 'navbar',
  title: 'Navbar Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL path' })
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'object',
      fields: [
        defineField({ name: 'label', type: 'string', title: 'Button Label' }),
        defineField({ name: 'url', type: 'string', title: 'Button URL' })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Navbar Settings'
      }
    }
  }
})
