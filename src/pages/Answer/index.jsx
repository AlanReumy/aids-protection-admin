import React from 'react'
import PageContent from '../../components/PageContent'
import {
    GetListApi,
    UpdateApi,
    CreateApi,
    DeleteApi
} from '../../service/api/baseApi'
import columnConfig from './config/columnConfig'
import config from './config/config'

export default function Answer() {
    return (
        <div>
            <PageContent
                config={config}
                columnConfig={columnConfig}
                actions={{
                    GetListApi: GetListApi('answer'),
                    UpdateApi: UpdateApi('answer'),
                    CreateApi: CreateApi('answer'),
                    DeleteApi: DeleteApi('answer')
                }}
            />
        </div>
    )
}
