import request from '../request'

// 登录
export const LoginApi = (body) => request.post('/user/login', body)

// 管理员更新用户信息
export const UpdateUserApi = () => {
    return (body) => request.post('/user/admin/update', body)
}
