import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentAccount: {
    id: 1,
    username: "lando",
    fullName: "Lando Norris",
    avatar:
      "https://i.pinimg.com/564x/84/dc/68/84dc68eb7b84ceeb859ce1cbd448220d.jpg",
  },
  accounts: [
    {
      id: 1,
      username: "ln4",
      fullName: "lando",
      avatar:
        "https://i.pinimg.com/564x/84/dc/68/84dc68eb7b84ceeb859ce1cbd448220d.jpg",
    },
    {
      id: 2,
      username: "lec",
      fullName: "leclerc",
      avatar:
        "//lh3.googleusercontent.com/YfcqVy7A3kSzK7iEQ0pvejZ3Vpo5MJd_ParWmm1AhjeOvCZMfpJv0i7VyYznemGiUKVzScXI0y_X3be1mFnliGw=s750",
    },
  ],
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});
export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
