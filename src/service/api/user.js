import request from '../request'

// 登录
export const LoginApi = (body) => request.post('/user/login', body)

// 获取用户列表
export const GetUserListApi = () => request.get('/user/list')

// 更新用户
export const UpdateUserApi = (body) => request.post('/user/update', body)
