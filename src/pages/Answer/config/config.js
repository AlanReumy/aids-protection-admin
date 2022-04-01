const config = [
    {
        type: 'string',
        label: 'id',
        field: 'id',
        disabled: true
    },
    {
        type: 'string',
        label: '回答标题',
        field: 'title',
        rules: [
            {
                required: true,
                message: '请输入回答标题'
            }
        ]
    },
    {
        type: 'string',
        label: '回答内容',
        field: 'content',
        rules: [
            {
                required: true,
                message: '请输入回答内容'
            }
        ]
    }
]

export default config
