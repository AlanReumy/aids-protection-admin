import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const navigate = useNavigate()
    const toggle = () => {
        setCollapsed(() => !collapsed)
    }

    const goUserPage = () => {
        navigate('/user')
    }
    const goHomePage = () => {
        navigate('/home')
    }
    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item
                        key="1"
                        icon={<VideoCameraOutlined />}
                        onClick={goHomePage}
                    >
                        首页
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        icon={<UserOutlined />}
                        onClick={goUserPage}
                    >
                        用户管理
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: 'trigger',
                            onClick: toggle
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
