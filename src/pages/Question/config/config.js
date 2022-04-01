const config = [
    {
        type: 'string',
        label: 'id',
        field: 'id',
        disabled: true
    },
    {
        type: 'string',
        label: '问题',
        field: 'title',
        rules: [
            {
                required: true,
                message: '请输入用户名'
            }
        ]
    },
    {
        type: 'string',
        label: '问题描述',
        field: 'desc',
        rules: [
            {
                required: true,
                message: '请输入密码'
            }
        ],
        disabled: false
    }
]

export default config
