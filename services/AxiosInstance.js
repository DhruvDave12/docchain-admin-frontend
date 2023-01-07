import axios from 'axios'

const AxiosInstance = axios.create({
	baseURL: 'https://shishya-backend-user.herokuapp.com/',
})

AxiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('token')
	if (!!token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export default AxiosInstance
