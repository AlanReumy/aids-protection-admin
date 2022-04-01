import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined
} from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
const { Header, Sider, Content } = Layout

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => {
        setCollapsed(() => !collapsed)
    }

    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<VideoCameraOutlined />}>
                        <Link to={{ pathname: '/home' }}>首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to={{ pathname: '/user' }}>用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to={{ pathname: '/game' }}>竞赛管理</Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        icon={<UserOutlined />}
                        title="问答管理"
                    >
                        <Menu.Item key="4">
                            <Link to={{ pathname: '/question' }}>问题管理</Link>
                        </Menu.Item>
                        <Menu.Item key="5">回答管理</Menu.Item>
                        <Menu.Item key="6">评论管理</Menu.Item>
                    </SubMenu>
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
