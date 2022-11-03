import { ContactList } from 'components/ContactList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import css from './App.module.css';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
const ID_LOCAL_KEY = 'active-id';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Bold', number: '(067)-323-43-43' },
    { id: '2', name: 'Jane Gold', number: '(066)-123-24-43' },
    { id: '3', name: 'Jim Fold', number: '(097)-456-40-39' },
    { id: '4', name: 'Jack Daniels', number: '(050)-488-48-38' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(ID_LOCAL_KEY));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  // const dispatch = useDispatch(addContactAction());

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
    setContacts(prevContacts => {
      return [
        ...prevContacts,
        {
          name: name,
          number: number,
          id: nanoid(),
        },
      ];
    });
  };

  const deleteContact = event => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== event.target.id);
    });
  };

  const filterContact = event => {
    setFilter(event.currentTarget.value);
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
