import store from '../redux/store';
import API from './axiosApi';
import { authAction } from '../redux/reducers/authSlice';


API.interceptors.request.use((config) => {
	const state = store.getState();
	const accessToken = state.auth.accessToken;
	// console.log("accessToken : ", accessToken);
	if (accessToken) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}
	return config;
}, (error) => {
	// Do something with request error
	return Promise.reject(error);
});


API.interceptors.response.use((response) => {
	// Any status code that lie within the range of 2xx cause this function to trigger    
	// if (response.data.success && response.data.token !== undefined && response.data.token !== '') {
	// 	localStorage.setItem("accessToken", response.data.token);
	// 	if (response.config.url !== 'refresh_token') {
	// 		localStorage.setItem("user_data", JSON.stringify(response.data.data.userData));
	// 	}
	// }
	// if (response.data.success === false && response.data.status !== undefined && response.data.status === 'logged-out') {
	// 	localStorage.clear();
	// 	// JWTAuthContext.logout();
	// }
	return response;
}, (error) => {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// console.log("API call error :", error.response);
	console.log("error?.response?.data?.code interceptors :", error?.response?.data?.code);
	if (error?.response?.data?.code === "token_not_valid" ) {
		store.dispatch(authAction.logout());
	}
	return Promise.reject(error);
});

export default API;