import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const shortenUrl = createAsyncThunk('shortener/shortenUrl', async url => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url })
    };
    const response = await fetch('http://localhost:5000/shorten', requestOptions)
        .then(response => response.json());

    return response.data;
})

export const shortenerSlice = createSlice({
  name: 'shortener',
  initialState: {
    url: ''
  },
  reducers: {
  },
  extraReducers: {
      [shortenUrl.fulfilled]: (state, action) => {
        state.url = action.payload;
      }
  }
});

export const selectUrl = state => state.shortener.url ? 'http://localhost:5000/' + state.shortener.url : '';

export default shortenerSlice.reducer;