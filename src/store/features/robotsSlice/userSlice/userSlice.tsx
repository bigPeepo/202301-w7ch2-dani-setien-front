import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../../types/types";

const initialUserState: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentRobots: User, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});
