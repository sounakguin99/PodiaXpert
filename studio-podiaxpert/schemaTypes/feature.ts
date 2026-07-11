import { defineField, defineType } from 'sanity'

export const feature = defineType({
  name: 'feature',
  type: 'object',
  title: 'Feature',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
