const config = [
    {
        type: 'string',
        label: 'id',
        field: 'id',
        disabled: true
    },
    {
        type: 'string',
        label: '竞赛名称',
        field: 'name',
        rules: [
            {
                required: true,
                message: '请输入竞赛名称'
            }
        ]
    },
    {
        type: 'string',
        label: '参与人数',
        field: 'personNum',
        rules: [
            {
                required: true,
                message: '请输入参与人数'
            }
        ]
    },
    {
        type: 'string',
        label: '完成人数',
        field: 'finishNum',
        rules: [
            {
                required: true,
                message: '请输入完成人数'
            }
        ]
    }
]

export default config
