import { createAsyncThunk } from '@reduxjs/toolkit'
// import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API from "../../services/axiosApi";
import { navigate } from "../../services/navigationService";
import { authActionTypes } from "../actionTypes";
import {
	APP_INTRO_STORAGE_KEY,
	ACCESS_TOKEN,
	REFRESH_TOKEN,
	USER_DATA
} from "../../constants/config";



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(functionAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
const setIntroDone = createAsyncThunk(
	authActionTypes.types.setIntroDone,
	async (payload, { rejectWithValue}) => {
		try {
			const set = await AsyncStorage.setItem(APP_INTRO_STORAGE_KEY, JSON.stringify(true));
			return true;
		} catch (error) {
			return rejectWithValue(false);
		}
	}
);


const getInitialState = createAsyncThunk(
	authActionTypes.types.getInitialState,
	async (payload, { rejectWithValue }) => {
		try {
			await AsyncStorage.clear();
			const appIntro = await AsyncStorage.getItem(APP_INTRO_STORAGE_KEY);
			// The value we return becomes the `fulfilled` action payload
			return appIntro ? true : false;
		} catch (error) {
			console.log("ERROR in getInitialState : ", error);
			return rejectWithValue(false);			
		}
	}
);

/* const checkLoggedIn = createAsyncThunk(
	authActionTypes.types.checkLoggedIn,
	async () => {
		const accessToken = await SecureStore.getItemAsync(ACCESS_TOKEN);
		let userData = await SecureStore.getItemAsync(USER_DATA);
		userData = userData ? JSON.parse(userData) : {};
		return {
			isloggedIn: accessToken ? true : false,
			accessToken,
			userData,
		};
	}
); */


// /**
//  * Fetch jobs for home screen
//  */
// const login = createAsyncThunk(
// 	actionTypes.login,
// 	async ({ email, password }, { rejectWithValue }) => {
// 		try {
// 			let userData = {};
// 			const response = await API.post('account/login/', { email, password });

// 			if (!response?.data?.data) { return null; }
// 			const loginData = response?.data?.data;
// 			userData = {
// 				email: loginData?.email,
// 				first_name: loginData?.first_name,
// 				last_name: loginData?.last_name,
// 				profile: loginData?.relationship?.documents?.profile,
// 			};
// 			await SecureStore.setItemAsync(USER_DATA, JSON.stringify(userData));
// 			await SecureStore.setItemAsync(ACCESS_TOKEN, loginData?.token?.access);
// 			await SecureStore.setItemAsync(REFRESH_TOKEN, loginData?.token?.refresh);
// 			return { userData, data: response?.data, accessToken: loginData?.token?.access };
// 		} catch (error) {
// 			console.log("ERROR in login : ", error?.response?.data);
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// /**
//  * Fetch specialities
//  */
// const fetchSpecialities = createAsyncThunk(
// 	actionTypes.fetchSpecialities,
// 	async (data, { rejectWithValue }) => {
// 		try {
// 			const response = await API.get('vendor/specialities/?per_page=10000&page=1');
// 			return response?.data?.data ? response?.data?.data : [];
// 		} catch (error) {
// 			console.log("ERROR in fetchSpecialities : ", error?.response?.data);
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// /**
//  * Fetch capablities
//  */
// const fetchCapabilities = createAsyncThunk(
// 	actionTypes.fetchCapabilities,
// 	async (data, { rejectWithValue }) => {
// 		try {
// 			const response = await API.get('vendor/capablities/?per_page=10000&page=1');
// 			return response?.data?.data ? response?.data?.data : [];
// 		} catch (error) {
// 			console.log("ERROR in fetchCapabilities : ", error?.response?.data);
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// /**
//  * API to complete a step of vendor registration
//  */
// const registerVendorStep = createAsyncThunk(
// 	actionTypes.registerVendorStep,
// 	async (data, { rejectWithValue }) => {
// 		try {
// 			const response = await API.post('vendor/registration/', data, {
// 				headers: {'Content-Type': 'multipart/form-data'},
// 			});
// 			return response?.data;
// 		} catch (error) {
// 			// console.log("ERROR ::: ", error?.response);
// 			console.log("ERROR in registerVendorStep : ", error?.response?.data);
// 			return rejectWithValue(error?.response?.data);
// 		}
// 	}
// );

// /**
//  * Handle logout
//  */
// const logout = createAsyncThunk(
// 	actionTypes.logout,
// 	async (data, { rejectWithValue }) => {
// 		console.log("-------- LOGOUT -----------")
// 		try {
// 			await SecureStore.deleteItemAsync(USER_DATA);
// 			await SecureStore.deleteItemAsync(ACCESS_TOKEN);
// 			await SecureStore.deleteItemAsync(REFRESH_TOKEN);
// 			navigate('Home');
// 		} catch (error) {
// 			return rejectWithValue(error);
// 		}
// 	}
// );


export default {
	setIntroDone,
	getInitialState,
	// checkLoggedIn,
	// login,
	// fetchSpecialities,
	// fetchCapabilities,
	// registerVendorStep,
	// logout,
}