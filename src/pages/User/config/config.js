const config = [
    {
        type: 'string',
        label: 'id',
        field: 'id',
        disabled: true
    },
    {
        type: 'string',
        label: '用户名',
        field: 'username',
        rules: [
            {
                required: true,
                message: '请输入用户名'
            }
        ]
    },
    {
        type: 'string',
        label: '密码',
        field: 'password',
        rules: [
            {
                required: true,
                message: '请输入密码'
            }
        ],
        disabled: false
    },
    {
        type: 'string',
        label: '手机号',
        field: 'phone',
        rules: [
            {
                required: true,
                message: '请输入手机号'
            }
        ]
    },
    {
        type: 'boolean',
        label: '是否是志愿者',
        field: 'isVolunteer'
    },
    {
        type: 'boolean',
        label: '是否是患者',
        field: 'isPatient'
    },
    {
        type: 'boolean',
        label: '是否是医生',
        field: 'isDoctor'
    },
    {
        type: 'number',
        label: '积分',
        field: 'integral'
    }
]

export default config
