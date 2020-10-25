import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd'
import { MainPage } from './components/Main/Main';
import './hardwareApp.scss';
import { SideMenu } from './components/Sider/SideMenu';
import { HeaderApp } from './components/Header/HeaderApp';
import { ItemsPage } from './components/ItemPage/ItemPage'
import { FooterApp } from './components/Footer/Footer';

type StateTypes = {
  collapsed: boolean
}

const HardwareApp: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu collapsed={collapsed} collapsible onCollapse={onCollapse} />
        <Layout className="site-layout">
          <div className='container_main'>
            <HeaderApp />
            <Switch>

              <Route exact path="/">
                <MainPage />
              </Route>

              <Route exact path='/Hinges/Brass'>
                <ItemsPage />
              </Route>
              <Route exact path='/Hinges/Zink'>
                <ItemsPage />
              </Route>

              <Route>
                Sorry, Page Not Found
            </Route>

            </Switch>
            <FooterApp />
          </div>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export { HardwareApp };
