import { createSlice } from '@reduxjs/toolkit';

import { IBestHighlightsData, IHighlightsState } from '@store/highlights/types';
import { IPayloadAction } from '@store/types';

export const counterSlice = createSlice({
  name: 'highlights',
  initialState: {
    bestHighlightsList: [],
  },
  reducers: {
    getBestList: (state: IHighlightsState, action: IPayloadAction<IBestHighlightsData[]>) => {
      state.bestHighlightsList = action.payload;
    },
  },
});

export const { getBestList } = counterSlice.actions;

export default counterSlice.reducer;
