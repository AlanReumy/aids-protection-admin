import React from 'react'
import { GetListApi, CreateApi, DeleteApi } from '../../service/api/baseApi'
import { UpdateUserApi } from '../../service/api/user'
import config from './config/config'
import PageContent from '../../components/PageContent'
import columnConfig from './config/columnConfig'

export default function User() {
    return (
        <div>
            <PageContent
                config={config}
                columnConfig={columnConfig}
                actions={{
                    GetListApi: GetListApi('user'),
                    UpdateApi: UpdateUserApi('user'),
                    CreateApi: CreateApi('user'),
                    DeleteApi: DeleteApi('user')
                }}
            />
        </div>
    )
}
