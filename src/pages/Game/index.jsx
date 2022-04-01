import React from 'react'
import config from './config/config'
import {
    GetListApi,
    UpdateApi,
    CreateApi,
    DeleteApi
} from '../../service/api/baseApi'
import PageContent from '../../components/PageContent'
import columnConfig from './config/columnConfig'

export default function Game() {
    return (
        <div>
            <PageContent
                config={config}
                columnConfig={columnConfig}
                actions={{
                    GetListApi: GetListApi('knowledgeGame'),
                    UpdateApi: UpdateApi('knowledgeGame'),
                    CreateApi: CreateApi('knowledgeGame'),
                    DeleteApi: DeleteApi('knowledgeGame')
                }}
            />
        </div>
    )
}
