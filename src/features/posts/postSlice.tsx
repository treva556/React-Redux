import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../../app/store";
import { initializeConnect } from "react-redux/es/components/connect";


export enum Statuses {
      Initial = " Not Fetched", 
      Loading = " Loading...",
      UpToDate = "Up To Date",
      Deleted = " Deleted",
      Error = "Error",
}

export interface PostState {
  id?: number;
  title?: string;
  body?: string;
  created_at?: any;
  updated_at?: any;
  /////
}

export interface PostsState {
    posts: PostState[];
    status: string;

}


const initialState: any = {
     posts: [
        {
            id: 0,
            title: "",
            body: "",
            created_at: "",
            updated_at: "",
        }
     ],
     status: Statuses.Initial
}

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder 
          .addCase(fetchPostsAsync.pending)

          .addCase(fetchPostsAsync.fulfilled)

          .addCase(fetchPostsAsync.error)


  }

})

