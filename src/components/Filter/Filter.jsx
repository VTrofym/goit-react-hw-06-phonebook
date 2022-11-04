import { useDispatch, useSelector } from 'react-redux';
import { filterContactAction } from 'redux/contacts/sliceFilter';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.filter);

  const filterContact = event => {
    const { value } = event.currentTarget;
    dispatch(filterContactAction(value));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <br />
      <input type="text" value={value} onChange={filterContact} />
    </label>
  );
};
