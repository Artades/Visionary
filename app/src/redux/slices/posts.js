import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';


export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts');
    return data;
});


export const fetchRemovePost = createAsyncThunk(
    "/posts/fetchRemovePost",
    async (id) => {
        await axios.delete(`/posts/${id}`);

    }
);

export const fetchCompletePost = createAsyncThunk(
    "posts/fetchCompletePost",
   async(id) => {
       await axios.patch(`/posts/${id}`)
   }


)

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },

};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    [fetchPosts.rejected]: (state) => {
        state.posts.items = [];
      state.posts.status = "error";
    },


      [fetchRemovePost.pending]: (state, action) => {
          state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg);
      },

      [fetchCompletePost.pending]: (state, action) => {

        const index = state.findIndex(
            (obj) => obj._id === action.payload.id
        )
          state[index].completed = action.payload.completed
      },


  },
});
export const postsReducer = postsSlice.reducer;