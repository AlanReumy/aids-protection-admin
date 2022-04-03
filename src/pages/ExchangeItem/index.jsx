import React, { useEffect, useState } from 'react'
import { GetListApi } from '../../service/api/baseApi'
import { Table, Button, Modal, Form, Input, message } from 'antd'
import { CreateExchangeItemApi } from '../../service/api/ExchangeItem'
import columnConfig from './config/columnConfig'

export default function ExchangeItem(props) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [list, setList] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        GetListApi('exchangeItem')().then((res) => {
            res.map((item, index) => {
                item.key = index
                return item
            })
            setList(() => res)
        })
    }, [])
    const showModal = () => {
        setIsModalVisible(true)
    }
    const handleOk = () => {
        CreateExchangeItemApi(data).then((res) => {
            message.success('新增成功')
        })
        setIsModalVisible(false)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const onFinishFailed = () => {}
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                新增
            </Button>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 16 }}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    initialValues={data}
                    preserve={false}
                    onValuesChange={function (changedValues, allValues) {
                        setData(() => allValues)
                    }}
                >
                    <Form.Item label="id" name="id" key="id">
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="商品名" name="name" key="name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="图片" name="img" key="img">
                        <Input />
                    </Form.Item>
                    <Form.Item label="所需积分" name="integral" key="integral">
                        <Input />
                    </Form.Item>
                    <Form.Item label="数量" name="count" key="count">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Table columns={columnConfig} dataSource={list} />
        </div>
    )
}
