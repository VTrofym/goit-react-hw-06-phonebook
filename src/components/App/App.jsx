import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

import { getContacts } from 'redux/contacts/selectors';

import css from './App.module.css';

const ID_LOCAL_KEY = 'active-id';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(ID_LOCAL_KEY));
    if (savedContacts) {
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(ID_LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.allContent}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
