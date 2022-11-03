import { addContact, changeFilter } from './constants'

const initialState = {
  contacts: [],
  filter: ''
}

export const contactsReduser = (state = initialState, action) => {

  switch (action.type) {
    case addContact:
      return {contacts: [...state.contacts, action.payload] }
    case changeFilter:
      return {...state, filter: action.payload}
    default:
      return state
  }
}