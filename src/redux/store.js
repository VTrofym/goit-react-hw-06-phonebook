// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from './contacts/redusers';

export const store = configureStore({
  reducer: contactsReduser,
});

// export const store = createStore(contactsReduser) // принимает Редюсер
