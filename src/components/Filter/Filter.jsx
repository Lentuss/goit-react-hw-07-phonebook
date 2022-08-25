import { useSelector, useDispatch } from 'react-redux/es/exports';
import { onFilter } from 'redux/phonebookActions';

import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(onFilter(e.currentTarget.value.toLowerCase().trim()));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={handleFilter} />
    </FilterLabel>
  );
};

export default Filter;
