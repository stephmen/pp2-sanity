/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'galleryPhoto',
  title: 'galleryPhoto',
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
    // {
    //   name: 'publishedAt',
    //   title: 'Published At',
    //   type: 'datetime',
    // }, 
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }]
    },
    // If 'mainImage' is part of your schema, you should define it here
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    }
  ],
  preview: {
    select: {
      media: 'mainImage',
      title: 'title',
      // publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { media, title } = selection;
      return {
        media,
        title,
      };
    }
  }
}
