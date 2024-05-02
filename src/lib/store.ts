import {configureStore} from "@reduxjs/toolkit";
import usersSlice, {USER_SLICE_NAME} from "./usersSlice";

export const store = configureStore({
  reducer: {
    [USER_SLICE_NAME]: usersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
