import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { items, filter } from './phonebookReducer';

const contacts = combineReducers({ items, filter });

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
