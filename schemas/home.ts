// schemas/pet.js
export default {
    name: 'home',
    type: 'document',
      title: 'Home',
    fields: [
      {
        name: 'title1',
        type: 'string',
        title: 'Title1'
      },
      {
        name: 'title2',
        type: 'string',
        title: 'Title2'
      },
      {
        name: 'desc',
        type: 'string',
        title: 'Desc'
      },
      {
        name: 'profile_img',
        type: 'image',
        title: 'Profile_Img',
        options: {
            hotspot: true // <-- Defaults to false
          },
      },
      {
        name:'core_skils',
        title:'Core_Skills',
        type:'array',
        of:[{type:'reference',to:[{type:'skills'}]}]
      }
    ]
  }