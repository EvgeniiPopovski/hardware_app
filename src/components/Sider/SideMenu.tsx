import React from 'react';
import { Menu, Layout, Typography, Row, Col } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom'
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
              : <Title level={2} style={{ color: 'white' }}><Link to='/'>Almaz-Lux</Link></Title>}
          </Col>
        </Row>
      </div>
      <Menu theme="dark" mode="inline">
        <SubMenu key="sub1" icon={<PieChartOutlined />} title="Glass Hinges">
          <Menu.Item key="1">
            <NavLink to='/Hinges/Brass'>Brass</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to='/Hinges/Zink'>Zink</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Premium Quality</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
        </SubMenu>

      </Menu>
    </Sider>
  );
};

export { SideMenu };
