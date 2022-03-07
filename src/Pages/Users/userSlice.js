import {
    createSlice
   
  } from "@reduxjs/toolkit";
  const userSlice = createSlice({
    name: "users",
    initialState: {
      users: [],
      totaluser:0,
      errorfetchDate:""
    },
    reducers: {
      fetchAllUsers: (state, action) => {
        return {
            ...state,
            users: action.payload,
            totaluser:action.payload.length
        };
      },
      errorfetchData: (state, action) => {
        return {
          ...state,
          errorfetchDate:action.payload.message
            
        };
      }
    }
  });
  export default userSlice.reducer;
  export const { fetchAllUsers,errorfetchData } = userSlice.actions;