const columnConfig = {
    static: [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '问题',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: '问题描述',
            dataIndex: 'desc',
            key: 'desc'
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => {
                return text.substring(0, 10)
            }
        }
    ]
}

export default columnConfig
