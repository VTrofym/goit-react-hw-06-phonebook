import { createStore } from 'redux';
import { contactsReduser } from './phonebook/redusers';

export const store = createStore(contactsReduser) // принимает Редюсер

