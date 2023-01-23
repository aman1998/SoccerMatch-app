import { createSlice } from '@reduxjs/toolkit';

import { defaultState } from '@store/consts';
import { ILeaguesData, ILeaguesState } from '@store/leagues/types';
import { IPayloadAction } from '@store/types';

const initialState: ILeaguesState = {
  list: defaultState,
};

export const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    getLeaguesFetching(state: ILeaguesState) {
      state.list = { ...defaultState, fetching: true };
    },
    getLeaguesData(state: ILeaguesState, action: IPayloadAction<ILeaguesData[]>) {
      state.list = { ...defaultState, data: action.payload };
    },
    getLeaguesError(state: ILeaguesState, action) {
      state.list = { ...defaultState, error: action.payload };
    },
  },
});

export const { getLeaguesFetching, getLeaguesData, getLeaguesError } = leaguesSlice.actions;

export default leaguesSlice.reducer;
