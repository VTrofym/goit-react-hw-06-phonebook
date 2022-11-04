import { createStore } from 'redux';

// import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
// const store = configureStore({
//   reducer: rootReducer,
// });

import { contactsReduser } from './contacts/redusers';

export const store = createStore(contactsReduser) // принимает Редюсер
