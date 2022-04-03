const columnConfig = {
    static: [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '文章标题',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: '文章内容',
            dataIndex: 'content',
            key: 'content'
        },
        {
            title: '文章类别',
            dataIndex: 'type',
            key: 'type',
            render(text) {
                return text === 1 ? '相关科普' : '帮助治疗'
            }
        }
    ]
}

export default columnConfig
