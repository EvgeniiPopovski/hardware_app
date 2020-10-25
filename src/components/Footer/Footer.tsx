import React from 'react';
import { Layout } from 'antd'
import './footer.scss';

const FooterApp: React.FC = () => {
  return (
    <div className='footer'>
      <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
    </div>
  );
};

export { FooterApp };
