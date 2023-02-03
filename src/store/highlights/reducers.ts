import { createSlice } from '@reduxjs/toolkit';

import { IBestHighlightsData, IHighlightsData, IHighlightsState } from '@store/highlights/types';
import { IPayloadAction } from '@store/types';
import { defaultState } from '@store/consts';

const initialState: IHighlightsState = {
  bestHighlightsList: defaultState,
  highlightsList: {
    ...defaultState,
    finish: false,
    latestDoc: null,
  },
};

export const counterSlice = createSlice({
  name: 'highlights',
  initialState,
  reducers: {
    getHighlightsFetching: (state: IHighlightsState) => {
      state.highlightsList.fetching = true;
    },
    getHighlightsData: (state: IHighlightsState, action: IPayloadAction<IHighlightsData[]>) => {
      state.highlightsList.data = action.payload;
      state.highlightsList.fetching = false;
      state.highlightsList.error = null;
    },
    getHighlightsFinish: (state: IHighlightsState, action: IPayloadAction<boolean>) => {
      state.highlightsList.finish = action.payload;
    },
    getHighlightsLatestDoc: (state: IHighlightsState, action: IPayloadAction<IHighlightsData>) => {
      state.highlightsList.latestDoc = action.payload;
    },
    getHighlightsError: (state: IHighlightsState, action) => {
      state.highlightsList.error = action.payload;
    },

    getBestHighlightsFetching: (state: IHighlightsState) => {
      state.bestHighlightsList.fetching = true;
    },
    getBestHighlightsData: (
      state: IHighlightsState,
      action: IPayloadAction<IBestHighlightsData[]>
    ) => {
      state.bestHighlightsList = { ...defaultState, data: action.payload };
    },
    getBestHighlightsError: (state: IHighlightsState, action) => {
      state.bestHighlightsList = { ...defaultState, error: action.payload };
    },
  },
});

export const {
  getBestHighlightsData,
  getBestHighlightsFetching,
  getBestHighlightsError,
  getHighlightsError,
  getHighlightsFetching,
  getHighlightsData,
  getHighlightsFinish,
  getHighlightsLatestDoc,
} = counterSlice.actions;

export default counterSlice.reducer;
