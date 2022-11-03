import { ContactList } from 'components/ContactList';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactAction,
  deleteContactAction,
  filterContactAction,
} from 'redux/contacts/action';
const ID_LOCAL_KEY = 'active-id';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(ID_LOCAL_KEY));
    if (savedContacts) {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ID_LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts!`);
    }
    dispatch(addContactAction({ name, number, id: nanoid() }));
  };

  const deleteContact = event => {
    dispatch(deleteContactAction(event.target.id));
  };

  const filterContact = event => {
    dispatch(filterContactAction(event.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  return (
    <div className={css.allContent}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={filterContact} value={filter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
