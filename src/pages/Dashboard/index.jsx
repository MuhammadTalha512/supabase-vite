import React, { useState } from 'react';
import {DashboardOutlined,FileOutlined,HomeFilled,TeamOutlined,UserOutlined,} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {key,icon,children,label,};
}
const items = [
  getItem('Home', '1', <HomeFilled />),
  getItem('Users', '2', <UserOutlined />),
  getItem('Dashboard', 'sub1', <DashboardOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer,},
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed}  onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content className='p-3'>

        </Content>
        <Footer className='text-center'>
          <p className='mb-0'>&copy;{new Date().getFullYear()}All Rights Reserved.</p>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;