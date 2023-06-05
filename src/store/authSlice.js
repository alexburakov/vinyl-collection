import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  status: null,
  error: null,
  user: '',
  loginTime: '',
  token: '',
};

export const Login = createAsyncThunk('auth/Login', async (data, thunkAPI) => {
  const key = import.meta.env.VITE_API_AUTH;
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${
    data.signUp ? 'signUp' : 'signInWithPassword'
  }?key=${key}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: { 'Content-type': 'application/json' },
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const result = await response.json();
      let messageError = 'Authentication failed';
      if (result && data.error && data.error.message) {
        messageError = data.error.message;
      }
      alert(messageError);
      throw new Error(messageError);
    }
  } catch (err) {
    return thunkAPI.rejectWithValue({ error: err.message });
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLoading(state) {
      const localString = localStorage.getItem('vinyl_collection_data');
      const localData = JSON.parse(localString);
      if (localData) {
        state.status = 'login';
        state.error = null;
        state.user = localData.user;
        state.loginTime = Date.now();
        state.token = localData.token;
      }
    },
    isLogout(state) {
      state.status = null;
      state.error = null;
      state.user = '';
      state.loginTime = null;
      state.token = '';
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.status = 'login';
        state.error = null;
        state.user = action.payload.email;
        state.loginTime = Date.now();
        state.token = action.payload.idToken;
        localStorage.setItem(
          'vinyl_collection_data',
          JSON.stringify({
            user: state.user,
            loginTime: state.loginTime,
            token: state.token,
          })
        );
      })
      .addCase(Login.rejected, (state, action) => {
        state.status = null;
        state.error = action.error.message;
        localStorage.clear();
        console.log('❌ Err:', action.error.message);
      });
  },
});

export const onLoading = authSlice.actions.onLoading;
export const isLogout = authSlice.actions.isLogout;

export default authSlice.reducer;
