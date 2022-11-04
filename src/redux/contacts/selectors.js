export const getContacts = state => {
  console.log('state :>> ', state);
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.filter.toLowerCase())
  )
}
    