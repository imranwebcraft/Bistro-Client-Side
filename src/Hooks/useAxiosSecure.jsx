import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
	baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
	const { logOut } = useAuth();
	const navigate = useNavigate();

	// Request interceptor
	axiosSecure.interceptors.request.use(
		function (config) {
			const token = localStorage.getItem('access-token');
			config.headers.authorization = `Bearer ${token}`;
			return config;
		},
		function (error) {
			return Promise.reject(error);
		}
	);

	// Response interceptor
	axiosSecure.interceptors.response.use(
		function (response) {
			return response;
		},
		async (error) => {
			const status = error?.response?.status;
			console.log('Error in the response interceptor', error);
			if (status === 401 || status === 403) {
				await logOut();
				navigate('/login');
			}
			return Promise.reject(error);
		}
	);

	return axiosSecure;
};

export default useAxiosSecure;
