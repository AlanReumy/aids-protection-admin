import React from 'react'
import './index.css'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { LoginApi } from '../../service/api/user'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        LoginApi(values)
            .then((res) => {
                navigate('/home')
                message.success('登录成功')
            })
            .catch((err) => {
                message.error('登录失败')
            })
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div className="login-container">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名'
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
                            message: '请输入密码'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
