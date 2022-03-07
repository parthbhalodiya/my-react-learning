import {
    createSlice
   
  } from "@reduxjs/toolkit";
  const postSlice = createSlice({
    name: "posts",
    initialState: {
      posts: [],
      post: {},
      totalposts:0,
      error:""
    },
    reducers: {
      fetchAllPosts: (state, action) => {
        
        return {
            ...state,
            posts: action.payload,
            totalposts:action.payload.length
        };
      },
      fetchPostById: (state, action) => {
        return {
            ...state,
            post: action.payload
        };
      },
      fetchCommentByPostId: (state, action) => {
        return {
            ...state,
            postcomment: action.payload
        };
      },
      errorfetchData: (state, action) => {
        return {
          ...state,
          error:action.payload.message
            
        };
      }
    }
  });
  export default postSlice.reducer;
  export const { fetchAllPosts,errorfetchData,fetchPostById ,fetchCommentByPostId} = postSlice.actions;