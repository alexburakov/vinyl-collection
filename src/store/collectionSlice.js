import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collection: [],
};

export const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    onLoading(state) {
      console.log('📥!!!📥');
      state.collection = [
        {
          id: 1,
          wish: false,
          artist: 'Король И Шут',
          album: 'Быль и Небыль. Том I',
          year: '	2020',
          imgUrl:
            'https://i.discogs.com/t5bpKHXZIml4eoTDTDcwnvheiIneQZnNqgv_Hxmqcrk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTAz/MDUyLTE2MDM1MzMw/NzUtODY2NS5qcGVn.jpeg',
        },
        {
          id: 2,
          wish: true,
          artist: 'Король И Шут',
          album: 'Быль и Небыль. Том II',
          year: '	2020',
          imgUrl:
            'https://i.discogs.com/t5bpKHXZIml4eoTDTDcwnvheiIneQZnNqgv_Hxmqcrk/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MTAz/MDUyLTE2MDM1MzMw/NzUtODY2NS5qcGVn.jpeg',
        },
      ];
    },
  },
});

export const onLoading = collectionSlice.actions.onLoading;

export default collectionSlice.reducer;
