import React, { useEffect, useState } from 'react'
import { Table, Space, Modal, Form, Input, Radio, Button } from 'antd'
import { GetUserListApi, UpdateUserApi } from '../../service/api/user'

export default function User() {
    const [userList, setUserList] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = (record) => {
        setUser(() => record)
        setIsModalVisible(true)
    }

    const handleOk = () => {
        console.log({ ...user, userId: user.id })
        UpdateUserApi({ ...user, userId: user.id })
            .then((res) => {
                return GetUserListApi()
            })
            .then((res) => {
                res.map((item, index) => {
                    item.key = index
                    return item
                })
                setUserList(() => res)
            })

        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    useEffect(() => {
        GetUserListApi().then((res) => {
            res.map((item, index) => {
                item.key = index
                return item
            })
            setUserList(() => res)
        })
    }, [])

    const [user, setUser] = useState({})

    const columns = [
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
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <Space size="middle">
                        <a onClick={() => showModal(record)}>编辑</a>
                        <a>删除</a>
                    </Space>
                )
            }
        }
    ]

    return (
        <div>
            <Button type="primary">新增</Button>
            <Modal
                title="编辑"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose={true}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 16 }}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    initialValues={user}
                    preserve={false}
                    onValuesChange={function (changedValues, allValues) {
                        setUser(() => allValues)
                    }}
                >
                    <Form.Item label="id" name="id">
                        <Input disabled />
                    </Form.Item>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="手机号"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="是否是志愿者" name="isVolunteer">
                        <Radio.Group>
                            <Radio value={true}>是</Radio>
                            <Radio value={false}>不是</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="是否是患者" name="isPatient">
                        <Radio.Group>
                            <Radio value={true}>是</Radio>
                            <Radio value={false}>不是</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="是否是医生" name="isDoctor">
                        <Radio.Group>
                            <Radio value={true}>是</Radio>
                            <Radio value={false}>不是</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columns} dataSource={userList} />
        </div>
    )
}
