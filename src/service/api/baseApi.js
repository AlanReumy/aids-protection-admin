import request from '../request'

export const CreateApi = (page) => {
    return (body) => request.post(`/${page}/create`, body)
}

export const GetListApi = (page) => {
    return () => request.get(`/${page}/list`)
}

export const DeleteApi = (page) => {
    return (data) => request.delete(`/${page}/delete`, { data })
}

export const UpdateApi = (page) => {
    return (body) => request.post(`/${page}/update`, body)
}
