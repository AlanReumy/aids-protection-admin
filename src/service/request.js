import axios from 'axios'

const axiosOption = {
    baseURL: 'https://twitzz.cn/api',
    timeout: 5000
}

const instance = axios.create(axiosOption)

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`
            }
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (res) => {
        if (res.data.data.token) {
            localStorage.setItem('token', res.data.data.token)
        }
        return res.data.data
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
