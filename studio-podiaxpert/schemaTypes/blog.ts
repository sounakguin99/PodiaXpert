import { defineField, defineType } from 'sanity'

export const blog = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
    }),
    defineField({ name: 'excerpt', type: 'text', title: 'Excerpt' }),
    defineField({ name: 'category', type: 'string', title: 'Category' }),
    defineField({ name: 'date', type: 'string', title: 'Date (e.g. October 12, 2023)' }),
    defineField({ name: 'author', type: 'string', title: 'Author' }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ],
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
})
