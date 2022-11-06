import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContactAction } from 'redux/contacts/sliceContacts';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  const addContact = (name, number) => {
    dispatch(addContactAction({ name, number, id: nanoid() }));
  };

  return (
    <form className={css.boxInput} onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input
          value={name}
          onChange={handleChange}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Numbers
        <br />
        <input
          onChange={handleChange}
          value={number}
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <div>
        <button type="submit" className={css.addContact}>
          Add contact
        </button>
      </div>
    </form>
  );
};
