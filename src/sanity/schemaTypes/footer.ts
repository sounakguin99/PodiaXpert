import { defineField, defineType } from 'sanity'

export const footer = defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandInfo',
      title: 'Brand Information',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text'
        }),
        defineField({
          name: 'facebookUrl',
          title: 'Facebook URL',
          type: 'url'
        }),
        defineField({
          name: 'instagramUrl',
          title: 'Instagram URL',
          type: 'url'
        }),
        defineField({
          name: 'youtubeUrl',
          title: 'YouTube URL',
          type: 'url'
        })
      ]
    }),

    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL path (e.g. /about)' })
          ]
        }
      ]
    }),

    defineField({
      name: 'topTreatments',
      title: 'Top Treatments',
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
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'location', type: 'text', title: 'Location' }),
        defineField({ name: 'phone', type: 'string', title: 'Phone Number' }),
        defineField({ name: 'phoneSubtitle', type: 'string', title: 'Phone Subtitle' }),
        defineField({ name: 'email', type: 'string', title: 'Email Address' }),
        defineField({ name: 'workingHours', type: 'text', title: 'Working Hours' })
      ]
    }),

    defineField({
      name: 'bottomBar',
      title: 'Bottom Bar',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'copyrightText', type: 'string', title: 'Copyright Text' }),
        defineField({
          name: 'links',
          title: 'Legal Links',
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
        })
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Global Footer Settings'
      }
    }
  }
})
