import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { deleteContactAction } from 'redux/contacts/sliceContacts';
import css from './ContactList.module.css';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onDeleteContact = event => {
    const { id } = event.target;
    dispatch(deleteContactAction(id));
  };

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
