// schemas/pet.js
export default {
    name: 'skills',
    type: 'document',
      title: 'Skills',
    fields: [
      {
        name: 'skill',
        type: 'string',
        title: 'Skill'
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
        name: 'logo',
        type: 'image',
        title: 'Logo',
        options: {
            hotspot: true // <-- Defaults to false
          },
      },
    ]
  }