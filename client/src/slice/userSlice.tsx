import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';

export const loginAsync = createAsyncThunk('user/login', async (payload: any) => {
  const userData = (await authApi.login(payload)) as any;
  const { accessToken, ...user } = userData;
  // The value we return becomes the `fulfilled` action payload
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('user', user);

  return user;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    current: {},
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

export default counterSlice.reducer;
