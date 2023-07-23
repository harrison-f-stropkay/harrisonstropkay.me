import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice';

const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
