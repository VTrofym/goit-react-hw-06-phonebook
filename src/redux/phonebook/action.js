import { addContact, changeFilter } from 'redux/constants'

export const addContactAction = payload => ({
  type: addContact,
  payload
})

export const changeFilterAction = payload => ({
  type: changeFilter,
  payload
})


