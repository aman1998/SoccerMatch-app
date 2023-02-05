import { createSelector } from '@reduxjs/toolkit';

import { IApplicationState } from '@store/types';
import { IHighlightsState } from '@store/highlights/types';

const selectState = (state: IApplicationState) => state.highlights;

export const highlightsListDataSelector = createSelector(
  selectState,
  (highlights: IHighlightsState) => {
    const newArr = [...highlights.highlightsList.data];
    newArr.splice(0, 12);
    return newArr;
  }
);

export const highlightsListFinishSelector = createSelector(
  selectState,
  (highlights: IHighlightsState) => highlights.highlightsList.finish
);

export const highlightsListLatestDocSelector = createSelector(
  selectState,
  (highlights: IHighlightsState) => highlights.highlightsList.latestDoc
);

export const highlightsListFetchingSelector = createSelector(
  selectState,
  (highlights: IHighlightsState) => highlights.highlightsList.fetching
);
