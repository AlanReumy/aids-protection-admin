import request from '../request'

export const CreateVolunteerApi = (body) =>
    request.post('/volunteer/create', body)
