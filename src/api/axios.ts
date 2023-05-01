import axios from 'axios';
import { REACT_BACKEND_URI } from 'config';

export const axiosInstance = axios.create({
    baseURL: REACT_BACKEND_URI,
});
