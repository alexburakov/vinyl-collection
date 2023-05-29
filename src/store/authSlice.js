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
  reducers: {},
  extraReducers: {
    [Login.pending]: (state, action) => {
      state.status = 'loading';
      console.log('loading...');
    },
    [Login.fulfilled]: (state, action) => {
      state.status = 'login';
      state.user = action.payload.email;
      state.loginTime = Date.now();
      state.token = action.payload.idToken;
      console.log('login is ok');
    },
    [Login.rejected]: (state, action) => {
      state.status = null;
      state.error = action.error.message;
      console.log('❌ Err:', action.error.message);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoginTime, setToken } = authSlice.actions;

export default authSlice.reducer;
