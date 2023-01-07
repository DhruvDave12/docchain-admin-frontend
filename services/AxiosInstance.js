import axios from 'axios'

const AxiosInstance = axios.create({
	baseURL: 'https://shishya-backend-production.up.railway.app/',
})

AxiosInstance.interceptors.request.use((config) => {
	const token = localStorage.getItem('@docusertoken')
	if (!!token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export default AxiosInstance
