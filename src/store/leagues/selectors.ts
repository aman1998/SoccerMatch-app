import { createSelector } from '@reduxjs/toolkit';

import { ILeaguesState } from '@store/leagues/types';
import { IApplicationState } from '@store/types';

const selectState = (state: IApplicationState) => state.leagues;

export const leaguesListFetchingSelector = createSelector(
  selectState,
  (leagues: ILeaguesState) => leagues.list.fetching
);

export const leaguesListDataSelector = createSelector(
  selectState,
  (leagues: ILeaguesState) => leagues.list.data
);
