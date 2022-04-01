import request from '../request'

// 创建问题
export const CreateQuestionList = (body) =>
    request.post('/question/create', body)

// 删除问题
export const GetQuestionList = () => request.get('/question/list')
