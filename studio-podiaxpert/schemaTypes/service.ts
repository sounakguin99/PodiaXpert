import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
    }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
    }),
    defineField({ name: 'description', type: 'text', title: 'Description (for SEO)' }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ],
    }),
  ],
})
