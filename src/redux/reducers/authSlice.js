import { createSlice } from '@reduxjs/toolkit'
import { authActionTypes } from "../actionTypes";
import { authAction } from "../actions";


const initialState = {
	isAppLoading: true,
	appIntroDone: false,
  value: 0,
  loginLoading: false,
	loggedIn: false,
	accessToken: '',
	userData: {},
	isLoading: false,
};


export const authSlice = createSlice({
  name: authActionTypes.SLICE_NAME,
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
	extraReducers: (builder) => {
		builder
			.addCase(authAction.setIntroDone.fulfilled, (state) => {
				state.appIntroDone = true;				
			})
			.addCase(authAction.setIntroDone.rejected, (state) => {
				state.appIntroDone = false;
			})
      .addCase(authAction.getInitialState.pending, (state) => {
				state.isAppLoading = true;
			})
			.addCase(authAction.getInitialState.fulfilled, (state, action) => {
				state.isAppLoading = false;
        state.appIntroDone = action.payload;
			})
			.addCase(authAction.getInitialState.rejected, (state) => {
				state.isAppLoading = false;
			})
	}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions;

export { authAction };

export default authSlice.reducer;