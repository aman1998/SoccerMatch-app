import { createSlice } from '@reduxjs/toolkit';

import { IBestHighlightsData, IHighlightsState } from '@store/highlights/types';
import { IPayloadAction } from '@store/types';
import { defaultState } from '@store/consts';

const initialState: IHighlightsState = {
  bestHighlightsList: defaultState,
};

export const counterSlice = createSlice({
  name: 'highlights',
  initialState,
  reducers: {
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

export const { getBestHighlightsData, getBestHighlightsFetching, getBestHighlightsError } =
  counterSlice.actions;

export default counterSlice.reducer;
