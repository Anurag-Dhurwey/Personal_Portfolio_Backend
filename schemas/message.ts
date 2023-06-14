// schemas/pet.js
export default {
    name: 'message',
    type: 'document',
      title: 'Message',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email'
      },
      {
        name: 'phone',
        type: 'number',
        title: 'Phone'
      },
      {
        name: 'message',
        type: 'string',
        title: 'Message'
      },
    ]
  }