import axios from 'axios';
import { BASE_API_PATH } from '../constants/config';


const API = axios.create({
	baseURL: BASE_API_PATH,
	headers: {'Content-Type':  'application/json'}
});


export default API;