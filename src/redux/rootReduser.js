import { combineReducers} from "@reduxjs/toolkit";
import filterReducer from './contacts/sliceFilter';
import contactsReducer from "./contacts/sliceContacts";

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
})