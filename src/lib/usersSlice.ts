import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import {User} from "../app/model/User";

export const USER_SLICE_NAME = 'user';

export interface UserState {
    userName: string;
    jobTitle: string;
}

const initialUserState: UserState = {
  userName: '',
  jobTitle: '',
}
const usersSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState: initialUserState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.userName = action.payload.userName;
      state.jobTitle = action.payload.jobTitle;
    },
  },
})

export const getUser = (state: RootState) => state[USER_SLICE_NAME];


export const userActions = usersSlice.actions;
export default usersSlice;
