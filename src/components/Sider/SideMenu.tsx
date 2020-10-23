import React from 'react';
import { Menu, Layout, Typography, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';


const { Sider } = Layout;
const { Title } = Typography;

type PropsTypes = {
  collapsed?: boolean,
  onCollapse?: (isClosed: boolean) => void,
  collapsible?: boolean
}

const SideMenu: React.FC<PropsTypes> = ({ collapsed, onCollapse }) => {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" style={{ color: 'white' }}>
        <Row align="middle" justify="center" style={{ paddingTop: '20px' }}>
          <Col>
            {collapsed
              ? <Title level={2} style={{ color: 'white' }}>A</Title>
              : <Title level={2} style={{ color: 'white' }}>Almaz-Lux</Title>}
          </Col>
        </Row>
      </div>
      <Menu inlineCollapsed theme="dark" mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Glass hinges
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Premium Quality</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export { SideMenu };
