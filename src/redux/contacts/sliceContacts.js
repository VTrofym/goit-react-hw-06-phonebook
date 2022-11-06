import { createSlice, current } from '@reduxjs/toolkit'

export const initialState = {
  contacts: [],
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: (state, action) => {
      console.log(current(state));
      if (
      state.contacts.find(
        contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
    ) {
      return alert(`${action.payload.name} is already in contacts!`);
    }
      state.contacts=[...state.contacts, action.payload]
    },
    deleteContactAction: (state, action) => {
      console.log(action);
      state.contacts=state.contacts.filter(contact=>contact.id !== action.payload)
    }
  }
})

export const { addContactAction, deleteContactAction } = contactsSlice.actions
export default contactsSlice.reducer

