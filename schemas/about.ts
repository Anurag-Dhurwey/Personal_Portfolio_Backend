// schemas/pet.js
export default {
    name: 'about',
    type: 'document',
      title: 'About',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'session',
        type: 'string',
        title: 'Session'
      },
      {
        name: 'desc',
        type: 'string',
        title: 'Desc'
      },
      {
        name: 'img',
        type: 'image',
        title: 'Image',
        options: {
            hotspot: true // <-- Defaults to false
          },
      },
    ]
  }