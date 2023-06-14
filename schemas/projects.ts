// schemas/pet.js
export default {
    name: 'projects',
    type: 'document',
      title: 'Projects',
    fields: [
      {
        name: 'project',
        type: 'string',
        title: 'Project'
      },
      {
        name: 'dependencies',
        title: 'Dependencies',
        type: 'array',
        of:[{type:'string'}]
      },
      {
        name: 'level',
        type: 'string',
        title: 'Level'
      },
      {
        name: 'desc',
        type: 'string',
        title: 'Desc'
      },
      {
        name: 'references',
        title: 'References',
        type: 'array',
        of:[{type:'string'}]
      },
      {
        name: 'img',
        type: 'image',
        title: 'Img',
        options: {
            hotspot: true // <-- Defaults to false
          },
      },
    ]
  }