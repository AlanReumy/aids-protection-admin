import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { QuestionCircleOutlined, RadarChartOutlined } from '@ant-design/icons'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    GiftOutlined,
    DotChartOutlined,
    PlusCircleOutlined,
    IdcardOutlined
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
                        icon={<IdcardOutlined />}
                        title="志愿服务"
                    >
                        <Menu.Item key="5" icon={<PlusCircleOutlined />}>
                            <Link to="/volunteer/create">创建服务</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<DotChartOutlined />}>
                            <Link to="/volunteer/list">服务列表</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="7" icon={<GiftOutlined />}>
                        <Link to="/exchangeItem">积分商城</Link>
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
