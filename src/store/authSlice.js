import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: null,
  error: null,
  user: '',
  loginTime: '',
  token: '',
};

const url =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFgPDCGK_qe_vSCjpoyodb_8DQPCrGw5k';

export const Login = createAsyncThunk('auth/Login', async (data, thunkAPI) => {
  try {
    //
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: { 'Content-type': 'application/json' },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message });
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoginTime: (state, action) => {
      state.loginTime = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoginTime, setToken } = authSlice.actions;

export default authSlice.reducer;
