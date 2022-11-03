import { addContact, filterContact, deleteContact } from './constants'

export const addContactAction = payload => ({
  type: addContact,
  payload
})

export const filterContactAction = payload => ({
  type: filterContact,
  payload
})

export const deleteContactAction = payload => ({
  type: deleteContact,
  payload
})

