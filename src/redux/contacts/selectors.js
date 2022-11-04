export const getContacts = (state =>
    state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
  ))
    