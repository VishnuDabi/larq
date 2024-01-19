import { createSlice } from "@reduxjs/toolkit";
export const AuthSlice = createSlice(
  {
    name: "Auth",
    initialState: {
      value: false,
    },
    reducers: {
      login: (state) => {
        state.value = true;
      },
      logout: (state) => {
        state.value = false;
      },
    },
  },
  {
    name: "loggedInUser",
    initialState: {
      value: null,
    },
    reducers: {
      login: (state) => {
        // async function login(email, password) {
        //     await account.createEmailSession(email, password);
        //     setLoggedInUser(await account.get());
        // }
      },
    },
  }
);
export const { login, logout } = AuthSlice.actions;
export const selectAuth = (state) => state.Auth.value;
export default AuthSlice.reducer;
