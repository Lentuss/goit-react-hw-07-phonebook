import { createReducer, current } from '@reduxjs/toolkit';
import { addItem, deleteItem, onFilter } from './phonebookActions';

const initialStateItems = JSON.parse(localStorage.getItem('contacts')) || [];

export const items = createReducer(initialStateItems, {
  [addItem]: (state, { payload: contact }) => {
    return [...current(state), contact];
  },
  [deleteItem]: (state, { payload: id }) =>
    current(state).filter(item => id !== item.id),
});

export const filter = createReducer('', {
  [onFilter]: (state, { payload: value }) => value,
});
