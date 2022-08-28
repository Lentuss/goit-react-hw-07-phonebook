import * as contactsAPI from '../services/phonebookAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
  'contacts/getData',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.getItems();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addData = createAsyncThunk(
  'contacts/addData',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.addItem(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeData = createAsyncThunk(
  'contacts/removeData',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.deleteItem(id);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
