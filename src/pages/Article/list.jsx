import React from 'react'
import PageContent from '../../components/PageContent/index'
import columnConfig from './config/columnConfig'
import config from './config/config'

import { GetListApi, UpdateApi, DeleteApi } from '../../service/api/baseApi'

export default function ArticleList() {
    return (
        <div>
            <PageContent
                config={config}
                columnConfig={columnConfig}
                actions={{
                    GetListApi: GetListApi('article'),
                    UpdateApi: UpdateApi('article'),
                    DeleteApi: DeleteApi('article')
                }}
            />
        </div>
    )
}
