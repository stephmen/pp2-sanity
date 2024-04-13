// import author from './author'

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
      name: 'auteur',
      title: 'Auteur',
      type: 'string',
    },
    {
      name: 'source',
      title: 'source',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Address de l\'article (URL)',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Contenu de L\'Article',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'Photo Article',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: 'Date Publication',
      name: 'publishedAt',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
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
        subtitle: new Date(date).toLocaleDateString('fr-FR'),
      }
    }
  }
}
