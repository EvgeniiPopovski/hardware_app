import {Col, Carousel, Card } from 'antd'
import React from 'react'
import './carousel.scss'

const Slider = () => {
	return (
		<Col span={24}>
			<Carousel autoplay style={{ height: '30%' }}>
				<div>
					<div>
						<Card headStyle={{ margin: '0px' }} size='small' title="ItemCard" style={{ width: "20%" }} hoverable cover={<img src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' alt='example' />} />
					</div>
				</div>
				<div>
					<div style={{ height: '250px' }} className="carousel_slide">2</div>
				</div>
				<div>
					<div style={{ height: '250px' }} className="carousel_slide">3</div>
				</div>
				<div>
					<div style={{ height: '250px' }} className="carousel_slide">4</div>
				</div>
			</Carousel>
		</Col>
	)
}

export { Slider }