// import author from './author'
import projet from './projet'
export default {
  name: 'article',
  title: 'Articles Archives',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Photo Article',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      name: 'publishedAt',
      title: 'Date de Parution de L\'artice',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Contenu de L\'Article',
      type: 'blockContent',
    },
  ],
  orderings: [
    {
      title: 'Date du Spectacle Récent',
      name: 'releaseDateDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
  ],

  preview: {
    select: {
      media: 'mainImage',
      subtitle: 'title',
    },
  }
}
