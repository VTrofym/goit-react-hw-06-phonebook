import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  contacts: [],
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: (state, action) => {
      state.contacts=[...state.contacts, action.payload]
    },
    deleteContactAction: (state, action) => {
      state.contacts=state.contacts.filter(contact=>contact.id !== action.payload)
    }
  }
})

export const { addContactAction, deleteContactAction } = contactsSlice.actions
export default contactsSlice.reducer
