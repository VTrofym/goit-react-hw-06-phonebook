import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export function ContactList({ onDeleteContact }) {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name}: {contact.number}
          <button
            className={css.button}
            id={contact.id}
            onClick={onDeleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
