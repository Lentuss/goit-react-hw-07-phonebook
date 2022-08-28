import {
  createReducer,
  // current
} from '@reduxjs/toolkit';
import { onFilter } from './phonebookActions';
import { getData } from './phonebookOperations';

export const filter = createReducer('', {
  [onFilter]: (state, { payload: value }) => value,
});

export const items = createReducer([], {
  [getData.pending]: (state, { payload: items }) => [],
  [getData.fulfilled]: (state, { payload: items }) => [...items],
  [getData.rejected]: (state, action) => action.payload,
});
