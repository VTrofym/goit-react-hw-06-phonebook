import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.allContent}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
