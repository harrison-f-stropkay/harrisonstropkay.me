// src/store/redux/rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import modeReducer from './slices/modeSlice';

// Combine all reducers
const rootReducer = combineReducers({
  mode: modeReducer,
});

export default rootReducer;
