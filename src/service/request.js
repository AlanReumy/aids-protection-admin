import axios from 'axios'

const axiosOption = {
    baseURL: 'https://twitzz.cn/api',
    timeout: 5000
}

const instance = axios.create(axiosOption)

instance.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

instance.interceptors.response.use(
    (res) => {
        return res.data.data
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance
