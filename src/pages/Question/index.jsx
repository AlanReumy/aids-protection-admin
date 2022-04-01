import React from 'react'
import PageContent from '../../components/PageContent'
import config from './config/config'
import {
    GetListApi,
    UpdateApi,
    CreateApi,
    DeleteApi
} from '../../service/api/baseApi'
import columnConfig from './config/columnConfig'

export default function Question() {
    return (
        <div>
            <PageContent
                config={config}
                columnConfig={columnConfig}
                actions={{
                    GetListApi: GetListApi('question'),
                    UpdateApi: UpdateApi('question'),
                    CreateApi: CreateApi('question'),
                    DeleteApi: DeleteApi('question')
                }}
            />
        </div>
    )
}
