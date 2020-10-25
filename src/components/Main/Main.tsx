import React from 'react'
import { Layout, Row } from 'antd'
import { Slider } from './../Common/Slider/Slider'

const { Content } = Layout
const MainPage = () => {
  return (
    <Content style={{ margin: '0 16px' }}>
      <Row justify="center">
        <Slider />
      </Row>
    </Content>
  )
}

export { MainPage }