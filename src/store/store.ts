import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appSlice from './appSlice';

export default configureStore({
  reducer: {
    appSlice,
  },
  // add async actions to be ignored by Serialize Middleware
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: ["main/FetchData/fulfilled"],
  //   },
  // }),
  devTools: true,
});
