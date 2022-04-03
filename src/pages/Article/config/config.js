const config = [
    {
        type: 'string',
        label: 'id',
        field: 'id',
        disabled: true
    },
    {
        type: 'string',
        label: '文章标题',
        field: 'title'
    },
    {
        type: 'string',
        label: '文章内容',
        field: 'content'
    },
    {
        type: 'type',
        label: '文章类别',
        field: 'type',
        typeValue: [1, 2],
        typeField: ['相关科普', '预防治疗']
    }
]

export default config
