import { createSelector } from '@reduxjs/toolkit';

import { IApplicationState } from '@store/types';
import { IHighlightsState } from '@store/highlights/types';

const selectState = (state: IApplicationState) => state.highlights;

export const bestHighlightsListSelector = createSelector(
  selectState,
  (highlights: IHighlightsState) => highlights.bestHighlightsList
);
