import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const LIGHT: Mode = 'light';
export const DARK: Mode = 'dark';

export type Mode = 'light' | 'dark';

export type ModeState = {
  mode: Mode;
};

const initialState: ModeState = {
  mode: LIGHT,
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === LIGHT ? DARK : LIGHT;
    },
  },
});

export const modeSelector = (state: RootState) => state.mode.mode;

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
