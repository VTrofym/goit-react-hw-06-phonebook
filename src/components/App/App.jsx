import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { addContactAction, deleteContactAction } from 'redux/contacts/action';
import css from './App.module.css';

const ID_LOCAL_KEY = 'active-id';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

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
    const { id } = event.target;
    dispatch(deleteContactAction(id));
  };

  return (
    <div className={css.allContent}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList onDeleteContact={deleteContact} />
    </div>
  );
};
