import request from '../request'

export const CreateExchangeItemApi = (body) =>
    request.post('/exchangeItem/create', body)
