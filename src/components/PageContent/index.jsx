import React, { useEffect, useState } from 'react'
import { Table, Button, message, Space, Popconfirm } from 'antd'
import ModalForm from '../../components/ModalForm'

export default function PageContent(props) {
    const [list, setList] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [data, setData] = useState({})
    const [title, setTitle] = useState('')

    // 初始化列
    const columns = [
        ...props.columnConfig.static,
        {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <Space size="middle">
                        <a onClick={() => edit(record)}>编辑</a>
                        <Popconfirm
                            title="你确定要删除么?"
                            onConfirm={() => deleteItem(record)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href="#">删除</a>
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]

    useEffect(() => {
        props.actions.GetListApi().then((res) => {
            res.map((item, index) => {
                item.key = index
                return item
            })
            setList(() => res)
        })
    }, [props])

    // 新增
    const addItem = () => {
        setTitle(() => '新增')
        showModal(() => ({}))
    }

    // 编辑
    const edit = (record) => {
        setTitle(() => '编辑')
        showModal(record)
    }

    // 删除
    const deleteItem = (record) => {
        props.actions
            .DeleteApi({ id: record.id })
            .then(() => {
                return props.actions.GetListApi()
            })
            .then((res) => {
                res.map((item, index) => {
                    item.key = index
                    return item
                })
                setList(() => res)
                message.success('删除成功')
            })
    }

    // 显示模态框
    const showModal = (record) => {
        setData(() => record)
        setIsModalVisible(() => true)
    }

    // 完成新增或编辑
    const handleOk = (type) => {
        if (type === '编辑') {
            // 编辑
            props.actions
                .UpdateApi({ ...data, id: data.id })
                .then((res) => {
                    return props.actions.GetListApi()
                })
                .then((res) => {
                    res.map((item, index) => {
                        item.key = index
                        return item
                    })
                    setList(() => res)
                    setIsModalVisible(false)
                    message.success('编辑成功')
                })
        } else {
            // 新增
            props.actions
                .CreateApi({ ...data })
                .then(() => {
                    return props.actions.GetListApi()
                })
                .then((res) => {
                    res.map((item, index) => {
                        item.key = index
                        return item
                    })
                    setList(() => res)
                    setIsModalVisible(false)
                    message.success('新增成功')
                })
        }
    }

    // 取消
    const handleCancel = () => {
        setIsModalVisible(() => false)
    }

    return (
        <div>
            {props.actions.CreateApi && (
                <Button type="primary" onClick={addItem}>
                    新增
                </Button>
            )}

            <ModalForm
                title={title}
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                setData={setData}
                data={data}
                config={props.config}
            />
            <Table columns={columns} dataSource={list} />
        </div>
    )
}
