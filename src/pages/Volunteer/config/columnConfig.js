const columnConfig = {
    static: [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: '详情',
            dataIndex: 'desc',
            key: 'desc',
            render: (text) => {
                return text ? text.substring(0, 10) + '...' : text
            }
        },
        {
            title: '开始时间',
            dataIndex: 'startDate',
            key: 'startDate',
            render: (text) => {
                return text ? text.substring(0, 10) : text
            }
        },
        {
            title: '结束时间',
            dataIndex: 'endDate',
            key: 'endDate',
            render: (text) => {
                return text ? text.substring(0, 10) : text
            }
        }
    ]
}

export default columnConfig
