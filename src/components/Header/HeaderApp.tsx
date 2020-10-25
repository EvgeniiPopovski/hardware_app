import React from 'react';
import {Layout} from 'antd' 
import './Header.scss';

const { Header } = Layout

const HeaderApp:  React.FC = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0, height: '50px' }}>
      <h1 className='header_title'>Almaz-Lux</h1>
    </Header>
  )
}


export { HeaderApp };
