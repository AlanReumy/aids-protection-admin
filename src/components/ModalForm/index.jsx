import React from 'react'
import { Modal, Form, Input, Radio, DatePicker } from 'antd'
const { RangePicker } = DatePicker

export default function ModalForm(props) {
    return (
        <div>
            <Modal
                title={props.title}
                visible={props.isModalVisible}
                onOk={() => props.handleOk(props.title)}
                onCancel={props.handleCancel}
                destroyOnClose={true}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 16 }}
                    onFinishFailed={props.onFinishFailed}
                    autoComplete="off"
                    initialValues={props.data}
                    preserve={false}
                    onValuesChange={function (changedValues, allValues) {
                        props.setData(() => allValues)
                    }}
                >
                    {props.config.map((item) => {
                        switch (item.type) {
                            case 'string':
                                return (
                                    <Form.Item
                                        label={item.label}
                                        name={item.field}
                                        key={item.field}
                                        rules={item.rules}
                                    >
                                        <Input disabled={item.disabled} />
                                    </Form.Item>
                                )
                            case 'number':
                                return (
                                    <Form.Item
                                        label={item.label}
                                        name={item.field}
                                        key={item.field}
                                        rules={item.rules}
                                    >
                                        <Input disabled={item.disabled} />
                                    </Form.Item>
                                )
                            case 'boolean':
                                return (
                                    <Form.Item
                                        label={item.label}
                                        name={item.field}
                                        key={item.field}
                                        rules={item.rules}
                                    >
                                        <Radio.Group>
                                            <Radio value={true}>是</Radio>
                                            <Radio value={false}>不是</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                )
                            case 'date':
                                return (
                                    <Form.Item
                                        label={item.label}
                                        name={item.field}
                                        key={item.field}
                                        rules={item.rules}
                                    >
                                        <RangePicker />
                                    </Form.Item>
                                )
                            default:
                                break
                        }
                    })}
                </Form>
            </Modal>
        </div>
    )
}
