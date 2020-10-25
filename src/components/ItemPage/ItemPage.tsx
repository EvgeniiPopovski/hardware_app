import React from 'react';
import {Row , Col, Card, Typography }from 'antd'
import './itempage.scss'

const ItemsPage: React.FC = () => {
  return (

    <div className='container'>
      <Row justify='end'>
        <Typography.Title level={2}>
          Hinges: Brass
        </Typography.Title>
      </Row>
      <Row gutter={[16,16]} >
        <Col span={6}>
          <Card hoverable title="hinge" />
        </Col>
      </Row>
    </div>
  )
}

export { ItemsPage  }