import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  type: 'document',
  title: 'Contact Page',
  fields: [
    // 1. HERO SECTION
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'subheading', type: 'string', title: 'Subheading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' })
      ]
    }),

    // 2. CONTACT INFO
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'location', type: 'text', title: 'Location Address' }),
        defineField({ name: 'workingHours', type: 'text', title: 'Working Hours' }),
        defineField({ name: 'emailAddress', type: 'string', title: 'Email Address' }),
        defineField({ name: 'phone', type: 'string', title: 'Phone Number (Call)' }),
        defineField({ name: 'whatsapp', type: 'string', title: 'WhatsApp Number' })
      ]
    }),

    // 3. WHY BOOK US
    defineField({
      name: 'whyBookUs',
      title: 'Why Book With Us',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'desc', type: 'text', title: 'Description' }),
                defineField({ name: 'icon', type: 'string', title: 'Icon Emoji (e.g. 🩺)' })
              ]
            }
          ]
        }),
        defineField({ name: 'bannerTitle', type: 'string', title: 'Banner Title' }),
        defineField({ name: 'bannerSubtitle', type: 'string', title: 'Banner Subtitle' })
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
        title: 'Contact Page',
        subtitle: subtitle ? `Hero: ${subtitle}` : 'Edit contact page content'
      }
    }
  }
})
