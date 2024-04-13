/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'presse',
    title: 'Presse',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      }, 
      {
        name: 'body',
        title: 'Notre Histoire',
        type: 'blockContent',
      },
      {
        name: 'imagesGallery',
        title: 'Images gallery',
        type: 'array',
        of: [{ type: 'image' }]
       }
     
    ],
    preview: {
      select: {
        media: 'mainImage',
        title: 'title',
        date: 'publishedAt',
      },
    
    prepare(selection, viewOptions = {}) {
      const { date, media, } = selection
      const title = viewOptions.ordering && viewOptions.ordering.name === 'publishedAt'
      ? `${selection.title} (${selection.publishedAt})`
      : selection.title
      return {
        media,
        title,
        // subtitle: new Date(date).toLocaleDateString('fr-FR'),
      }
    }
  }
} 
  
  