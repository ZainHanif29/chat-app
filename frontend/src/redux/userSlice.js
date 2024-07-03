import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authUser: null,
    selectedUser: null,
    otherUsers: [],
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
  },
});

export const { setAuthUser, setSelectedUser, setOtherUsers } = userSlice.actions;
export default userSlice.reducer;
