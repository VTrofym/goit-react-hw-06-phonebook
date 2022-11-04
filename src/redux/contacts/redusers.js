// import { addContact, filterContact, deleteContact } from './constants'

// export const initialState = {
//   contacts: [],
//   filter: ''
// }

// export const contactsReduser = (state = initialState, action) => {
//   switch (action.type) {

//     case addContact:
//       return {...state, contacts: [...state.contacts, action.payload]  }
//     case filterContact:
//       return { ...state, filter: action.payload }
//     case deleteContact:
//       return{...state, contacts: state.contacts.filter(contact=>contact.id !== action.payload)}
//     default:
//       return state
//   }
// }