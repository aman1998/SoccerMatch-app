import { createSlice } from '@reduxjs/toolkit';

import {
  IHighlightsData,
  IHighlightsState,
  ILeaguesHighlightsError,
  ILeaguesHighlightsPayload,
} from '@store/highlights/types';
import { IPayloadAction } from '@store/types';
import { defaultState } from '@store/consts';

const initialState: IHighlightsState = {
  highlightsList: {
    ...defaultState,
    finish: false,
  },
  leaguesHighlights: {},
};

export const counterSlice = createSlice({
  name: 'highlights',
  initialState,
  reducers: {
    getHighlightsFetching: (state: IHighlightsState) => {
      state.highlightsList.fetching = true;
    },

    getHighlightsData: (state: IHighlightsState, action: IPayloadAction<IHighlightsData[]>) => {
      state.highlightsList.data.push(...action.payload);
      state.highlightsList.fetching = false;
      state.highlightsList.error = null;
    },

    getHighlightsFinish: (state: IHighlightsState, action: IPayloadAction<boolean>) => {
      state.highlightsList.finish = action.payload;
    },

    getHighlightsError: (state: IHighlightsState, action) => {
      state.highlightsList.error = action.payload;
    },

    getLeagueHighlightsFetching: (state: IHighlightsState, action: IPayloadAction<string>) => {
      state.leaguesHighlights = {
        ...state.leaguesHighlights,
        [action.payload]: {
          ...state.leaguesHighlights[action.payload],
          fetching: true,
        },
      };
    },

    getLeagueHighlightsData: (
      state: IHighlightsState,
      action: IPayloadAction<ILeaguesHighlightsPayload>
    ) => {
      const league = state.leaguesHighlights[action.payload.id];
      state.leaguesHighlights = {
        ...state.leaguesHighlights,
        [action.payload.id]: {
          ...defaultState,
          finish: league.finish,
          data:
            league && league?.data
              ? [...league.data, ...action.payload.data]
              : [...action.payload.data],
        },
      };
    },

    getLeagueHighlightsFinish: (
      state: IHighlightsState,
      action: IPayloadAction<{ id: string; finish: boolean }>
    ) => {
      state.leaguesHighlights = {
        ...state.leaguesHighlights,
        [action.payload.id]: {
          ...state.leaguesHighlights[action.payload.id],
          finish: action.payload.finish,
        },
      };
    },

    getLeagueHighlightsError(
      state: IHighlightsState,
      action: IPayloadAction<ILeaguesHighlightsError>
    ) {
      state.leaguesHighlights = {
        ...state.leaguesHighlights,
        [action.payload.id]: {
          ...defaultState,
          finish: state.leaguesHighlights[action.payload.id].finish,
          error: action.payload.error,
        },
      };
    },
  },
});

export const {
  getHighlightsError,
  getHighlightsFetching,
  getHighlightsData,
  getHighlightsFinish,
  getLeagueHighlightsError,
  getLeagueHighlightsFetching,
  getLeagueHighlightsData,
  getLeagueHighlightsFinish,
} = counterSlice.actions;

export default counterSlice.reducer;
