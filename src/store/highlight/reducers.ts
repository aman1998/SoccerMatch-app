import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'highlight',
  initialState: {
    list: {
      fetching: false,
      data: null,
      error: null,
    },
  },
  reducers: {
    getHighlightListFetching: (state: any) => {
      state.list = {
        fetching: true,
        data: null,
        error: null,
      };
    },
  },
});

export const { getHighlightListFetching } = counterSlice.actions;

export default counterSlice.reducer;
