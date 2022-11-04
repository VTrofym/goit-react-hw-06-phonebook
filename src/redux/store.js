// import { createStore } from 'redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from './contacts/sliceFilter'
import  contactsReducer  from "./contacts/sliceContacts";
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer
})

// обязательный параметр редюсер
// сюда передаются все мои редюсеры
export const store = configureStore({
  reducer: rootReducer,
});

// export const store = configureStore



// export const store = createStore(contactsReduser) // принимает Редюсер

// middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),