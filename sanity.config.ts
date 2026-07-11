import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemaTypes'

const myStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('About')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.listItem()
        .title('Doctors')
        .child(
          S.document()
            .schemaType('doctorsPage')
            .documentId('doctorsPage')
        ),
      S.listItem()
        .title('Contact')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.listItem()
        .title('Book Appointment')
        .child(
          S.document()
            .schemaType('appointmentPage')
            .documentId('appointmentPage')
        ),
      S.listItem()
        .title('Services')
        .child(
          S.list()
            .title('Services')
            .items([
              S.listItem()
                .title('Services Page Settings')
                .child(
                  S.document()
                    .schemaType('servicesPage')
                    .documentId('servicesPage')
                ),
              S.documentTypeListItem('service').title('All Services'),
            ])
        ),
      S.listItem()
        .title('Problems')
        .child(
          S.list()
            .title('Problems')
            .items([
              S.listItem()
                .title('Problems Page Settings')
                .child(
                  S.document()
                    .schemaType('problemsPage')
                    .documentId('problemsPage')
                ),
              S.documentTypeListItem('problem').title('All Problems'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Global Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),
      S.listItem()
        .title('Global Navbar')
        .child(
          S.document()
            .schemaType('navbar')
            .documentId('navbar')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !['homePage', 'aboutPage', 'doctorsPage', 'contactPage', 'appointmentPage', 'servicesPage', 'problemsPage', 'footer', 'navbar', 'page', 'service', 'problem'].includes(listItem.getId())
      ),
    ])

export default defineConfig({
  name: 'default',
  title: 'podiaxpert',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  
  basePath: '/studio',

  plugins: [structureTool({ structure: myStructure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
