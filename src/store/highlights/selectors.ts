import { createSelector } from '@reduxjs/toolkit';

import { IApplicationState } from '@store/types';
import {
  IHighlightsData,
  IHighlightsState,
  THighlightsOutputSelector,
} from '@store/highlights/types';

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

export const highlightsListFetchingSelector = createSelector(
  selectState,
  (highlights: IHighlightsState) => highlights.highlightsList.fetching
);

export const leagueHighlightsFetchingSelector = (id: string): THighlightsOutputSelector<boolean> =>
  createSelector(
    selectState,
    (highlights: IHighlightsState) => highlights.leaguesHighlights[id]?.fetching
  );

export const leagueHighlightsDataSelector = (
  id: string
): THighlightsOutputSelector<IHighlightsData[]> =>
  createSelector(
    selectState,
    (highlights: IHighlightsState) => highlights.leaguesHighlights[id]?.data
  );

export const leagueHighlightsFinishSelector = (id: string): THighlightsOutputSelector<boolean> =>
  createSelector(
    selectState,
    (highlights: IHighlightsState) => highlights.leaguesHighlights[id]?.finish
  );
