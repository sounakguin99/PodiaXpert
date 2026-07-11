import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
  fields: [
    // 1. HERO SECTION
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' })
      ]
    }),

    // 2. OUR STORY
    defineField({
      name: 'ourStory',
      title: 'Our Story',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({
          name: 'content',
          title: 'Content Paragraphs',
          type: 'array',
          of: [{ type: 'block' }]
        }),
        defineField({ name: 'callout', type: 'string', title: 'Callout Box Text' }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true }
        }),
        defineField({ name: 'experienceText', type: 'string', title: 'Experience Badge Text' })
      ]
    }),

    // 3. WHY CHOOSE
    defineField({
      name: 'whyChoose',
      title: 'Why Choose PodiaXpert?',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'subheading', type: 'text', title: 'Subheading' }),
        defineField({
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [{ type: 'string' }]
        })
      ]
    }),

    // 4. OUR EXPERTISE
    defineField({
      name: 'expertise',
      title: 'Our Expertise',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({
          name: 'expertiseItems',
          title: 'Expertise Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' })
              ]
            }
          ]
        })
      ]
    }),

    // 5. DOCTORS
    defineField({
      name: 'doctorsSection',
      title: 'Meet Our Doctors',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
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
        title: 'About Page',
        subtitle: subtitle ? `Heading: ${subtitle}` : 'Edit about page content'
      }
    }
  }
})
