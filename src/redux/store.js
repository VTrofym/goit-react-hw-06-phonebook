import { createStore } from 'redux';
import { contactsReduser } from './contacts/redusers';

export const store = createStore(contactsReduser) // принимает Редюсер

