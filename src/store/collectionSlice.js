import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseConfig } from '../helpers/configData.js';
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initialState = {
  status: null,
  error: null,
  collection: [],
};

export const loadingCollection = createAsyncThunk(
  'collection/loadingCollection',
  async (currentUser, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, currentUser));
      const myCollection = [];
      querySnapshot.forEach((doc) => {
        myCollection.push({ id: doc.id, ...doc.data() });
      });
      return myCollection;
    } catch (err) {
      return thunkAPI.rejectWithValue({ error: err.message });
    }
  }
);

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {},
  extraReducers: {
    [loadingCollection.pending]: (state) => {
      state.status = 'pengingData';
    },
    [loadingCollection.fulfilled]: (state, action) => {
      state.status = 'loadingData';
      state.collection = action.payload;
      console.log(state.collection);
    },
    [loadingCollection.rejected]: (state, action) => {
      state.status = 'errorData';
      state.error = action.error.message;
      console.log('❌ Err:', action.error.message);
    },
  },
});

export default collectionSlice.reducer;
