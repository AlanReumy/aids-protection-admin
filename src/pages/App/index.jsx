import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { QuestionCircleOutlined, RadarChartOutlined } from '@ant-design/icons'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons'
const { SubMenu } = Menu
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
                    <Menu.Item key="3" icon={<RadarChartOutlined />}>
                        <Link to={{ pathname: '/game' }}>竞赛管理</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<QuestionCircleOutlined />}>
                        <Link to={{ pathname: '/question' }}>问题管理</Link>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        icon={<UserOutlined />}
                        title="志愿服务"
                    >
                        <Menu.Item key="5" icon={<QuestionCircleOutlined />}>
                            <Link to="/volunteer/create">创建服务</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<QuestionCircleOutlined />}>
                            option2
                        </Menu.Item>
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
