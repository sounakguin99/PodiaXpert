import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    // 1. HERO SECTION
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'highlightText', type: 'string', title: 'Highlighted Text (e.g. "in Kolkata")' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({ 
          name: 'features', 
          type: 'array', 
          title: 'Bullet Features',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true }
        })
      ]
    }),

    // 2. TRUST BANNER
    defineField({
      name: 'trustBanner',
      title: 'Trust Banner',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Title' }),
        defineField({
          name: 'stats',
          title: 'Stats/Icons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'icon', type: 'string', title: 'Icon Name (e.g. Award, Microscope, Heart)' }),
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'string', title: 'Description' })
              ]
            }
          ]
        })
      ]
    }),

    // 3. ABOUT / WELCOME
    defineField({
      name: 'about',
      title: 'Welcome to PodiaXpert',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({
          name: 'content',
          title: 'Content Paragraphs',
          type: 'array',
          of: [{ type: 'block' }]
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Side Image',
          options: { hotspot: true }
        })
      ]
    }),

    // 4. WHY CHOOSE
    defineField({
      name: 'whyChoose',
      title: 'Why Choose PodiaXpert',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
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
                defineField({ name: 'icon', type: 'string', title: 'Icon Name (e.g. Activity, ClipboardCheck)' }),
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'description', type: 'text', title: 'Description' })
              ]
            }
          ]
        })
      ]
    }),

    // 5. SERVICES HEADER
    defineField({
      name: 'servicesSection',
      title: 'Our Services Section Header',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' })
      ]
    }),

    // 6. PROBLEMS HEADER
    defineField({
      name: 'problemsSection',
      title: 'Common Problems Section Header',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' })
      ]
    }),

    // 7. DOCTORS
    defineField({
      name: 'doctorsSection',
      title: 'Doctors Section',
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

    // 8. TESTIMONIALS
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({
          name: 'reviews',
          title: 'Reviews',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', title: 'Patient Name' }),
                defineField({ name: 'rating', type: 'number', title: 'Rating (1-5)' }),
                defineField({ name: 'text', type: 'text', title: 'Review Text' }),
                defineField({ name: 'image', type: 'string', title: 'Image URL or keep empty for placeholder' })
              ]
            }
          ]
        })
      ]
    }),

    // 9. FAQ
    defineField({
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'tagline', type: 'string', title: 'Tagline' }),
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'question', type: 'string', title: 'Question' }),
                defineField({ name: 'answer', type: 'text', title: 'Answer' })
              ]
            }
          ]
        })
      ]
    }),

    // 10. CTA
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'heading', type: 'string', title: 'Heading' }),
        defineField({ name: 'description', type: 'text', title: 'Description' }),
        defineField({ name: 'primaryButtonText', type: 'string', title: 'Primary Button Text' }),
        defineField({ name: 'phoneNumber', type: 'string', title: 'Phone Number (for secondary button)' })
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
        title: 'Home Page',
        subtitle: subtitle ? `Hero: ${subtitle}` : 'Edit home page content'
      }
    }
  }
})
