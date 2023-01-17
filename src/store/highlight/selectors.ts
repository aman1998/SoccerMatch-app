import { createSelector } from '@reduxjs/toolkit';

const selectState = (state: any) => state.highlight;

export const makeHighlightListFetchingSelector = createSelector(
  selectState,
  (highlight: any) => highlight.list.fetching
);
