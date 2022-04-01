import request from '../request'

// 登录
export const LoginApi = (body) => request.post('/user/login', body)
