import { createAction } from '@reduxjs/toolkit';

export const addItem = createAction('contacts/add');
export const deleteItem = createAction('contacts/delete');
export const onFilter = createAction('contacts/filter');
