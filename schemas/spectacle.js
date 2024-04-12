/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'spectacle',
  title: 'Spectacle',
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
      title: 'Date du Spectacle',
      type: 'datetime',
    },
    {
      name: 'endroit',
      title: 'Endroit ou se déroule le spectacle',
      type: 'string'
    },
    {
      name: 'nocivique',
      title: 'No Civique',
      type: 'number',
    },
    {
      name: 'rue',
      title: 'Rue',
      type: 'string',
    },
    {
      name: 'ville',
      title: 'Ville',
      type: 'string',
    },
    
    {
      name: 'body',
      title: 'Details du spectacle',
      type: 'blockContent',
    },
   
    {
      name: 'mainImage',
      title: 'Image relié au spectacle(optionel)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
   
  ],
  orderings: [
    {
      title: 'Date du Spectacle',
      name: 'releaseDateDesc',
      by: [
        {field: 'releaseDate', direction: 'asc'}
      ]
    }],
 
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
