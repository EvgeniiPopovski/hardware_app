import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
// import BurgerButton from "../../common/BurgerButton/BurgerButton";
import { Input, Button, Tooltip } from "antd";
import {MenuOutlined , ShoppingCartOutlined} from '@ant-design/icons'
const { Search } = Input;

export const Header = ({ toggleMenuOpen, cartItemList}) => {


	

	let cartButtonSum = 0

	for (let item of cartItemList) {
		cartButtonSum += (item.price*item.cartInfo.cartQuantity)
	}
	

	return (
		<div className={styles.headerContainer}>
			<div className={styles.menuBurgerContainer}>
				<Tooltip title="Меню">
					<Button shape='circle' onClick={toggleMenuOpen} icon={<MenuOutlined />} />
				</Tooltip>
				{/* <BurgerButton toggleMenuOpen={toggleMenuOpen} /> */}
				<h1 className={styles.logo}>
					<Link to="/" className={styles.link}>
						Almaz-Luks
					</Link>
				</h1>
			</div>
			<div className={styles.input}>
				<Search
					placeholder="input search text"
					enterButton="Search"
					size="large"
					onSearch={(value) => console.log(value)}
				/>
			</div>
			<Link to="/cart" >
				<Tooltip title="Корзина">
					<Button  type='primary' icon={<ShoppingCartOutlined />} >{cartButtonSum ===0 ? 'Ваша корзина пуста' : `Заказ на сумму ${cartButtonSum} руб`} </Button>
				</Tooltip>
			</Link>
		</div>
	);
};
