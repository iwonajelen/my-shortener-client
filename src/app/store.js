import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import shortenerReducer from '../features/shortener/shortenerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    shortener: shortenerReducer
  },
});
