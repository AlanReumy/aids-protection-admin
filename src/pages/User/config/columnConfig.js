const columnConfig = {
    static: [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: '手机号码',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: '积分',
            dataIndex: 'integral',
            key: 'integral'
        },
        {
            title: '是否为志愿者',
            dataIndex: 'isVolunteer',
            key: 'isVolunteer',
            render: (text) => {
                if (text) {
                    return '是'
                } else {
                    return '不是'
                }
            }
        },
        {
            title: '是否为患者',
            dataIndex: 'isPatient',
            key: 'isPatient',
            render: (text) => {
                if (text) {
                    return '是'
                } else {
                    return '不是'
                }
            }
        },
        {
            title: '是否为医生',
            dataIndex: 'isDoctor',
            key: 'isDoctor',
            render: (text) => {
                if (text) {
                    return '是'
                } else {
                    return '不是'
                }
            }
        }
    ]
}

export default columnConfig
