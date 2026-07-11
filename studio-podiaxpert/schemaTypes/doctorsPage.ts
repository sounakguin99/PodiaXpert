import { defineField, defineType } from 'sanity'

export const doctorsPage = defineType({
  name: 'doctorsPage',
  type: 'document',
  title: 'Doctors Page',
  fields: [
    // 1. HERO SECTION
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

    // 2. DOCTORS SECTION
    defineField({
      name: 'doctorsSection',
      title: 'Doctors Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'doctors',
          title: 'Doctors',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', title: 'Name' }),
                defineField({ name: 'qualifications', type: 'string', title: 'Qualifications' }),
                defineField({ name: 'role', type: 'string', title: 'Role' }),
                defineField({ name: 'experience', type: 'string', title: 'Experience' }),
                defineField({ name: 'details', type: 'text', title: 'Details' }),
                defineField({ name: 'image', type: 'image', title: 'Photo', options: { hotspot: true } })
              ]
            }
          ]
        })
      ]
    }),

    // SEO Settings
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
        title: 'Doctors Page',
        subtitle: subtitle ? `Hero: ${subtitle}` : 'Edit doctors page content'
      }
    }
  }
})
