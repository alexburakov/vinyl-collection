import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFgPDCGK_qe_vSCjpoyodb_8DQPCrGw5k',
  authDomain: 'vinyl-collection-86bff.firebaseapp.com',
  databaseURL:
    'https://vinyl-collection-86bff-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vinyl-collection-86bff',
  storageBucket: 'vinyl-collection-86bff.appspot.com',
  messagingSenderId: '275282737285',
  appId: '1:275282737285:web:2c808f9810f891dbcf11ec',
};

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
