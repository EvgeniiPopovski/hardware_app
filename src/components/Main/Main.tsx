import React from 'react';
import { Layout, Row, Col, Carousel } from 'antd';
import { SideMenu } from '../Sider/SideMenu';
import './carousel.scss';

const { Header, Content, Footer } = Layout;

type StateTypes = {
  collapsed: boolean
}

class Main extends React.Component {
  state: StateTypes = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu collapsed={collapsed} collapsible onCollapse={this.onCollapse} />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, height: '50px' }} />
          <Content style={{ margin: '0 16px' }}>
            <Row justify="center">
              <Col span={24}>
                <Carousel autoplay>
                  <div>
                    <h3 className="carousel_slide">1</h3>
                  </div>
                  <div>
                    <h3 className="carousel_slide">2</h3>
                  </div>
                  <div>
                    <h3 className="carousel_slide">3</h3>
                  </div>
                  <div>
                    <h3 className="carousel_slide">4</h3>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export { Main };
