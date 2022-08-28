import { createReducer, current } from '@reduxjs/toolkit';
import { onFilter } from './phonebookActions';
import { getData, addData, removeData } from './phonebookOperations';

export const filter = createReducer('', {
  [onFilter]: (state, { payload: value }) => value,
});

export const items = createReducer([], {
  [getData.pending]: (state, { payload: items }) => [],
  [getData.fulfilled]: (state, { payload: items }) => [...items],
  [getData.rejected]: (state, action) => action.payload,
  [addData.pending]: (state, { payload: items }) => state,
  [addData.fulfilled]: (state, { payload: item }) => [...current(state), item],
  [addData.rejected]: (state, action) => action.payload,
  [removeData.pending]: (state, { payload: contact }) => state,
  [removeData.fulfilled]: (state, { payload: contact }) =>
    current(state).filter(item => contact.id !== item.id),
  [removeData.rejected]: (state, action) => action.payload,
});
