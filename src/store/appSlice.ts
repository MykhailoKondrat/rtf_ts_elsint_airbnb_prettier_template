import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: { testValue: 1 },
  reducers: {
    testAction: (state) => {
      state.testValue += 1;
    },
  },
});
export const { testAction } = appSlice.actions;
export default appSlice.reducer;
