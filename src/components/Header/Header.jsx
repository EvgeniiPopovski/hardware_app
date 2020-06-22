import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
// import BurgerButton from "../../common/BurgerButton/BurgerButton";
import { Input, Button, Tooltip } from "antd";
import {MenuOutlined , ShoppingCartOutlined} from '@ant-design/icons'
const { Search } = Input;

export const Header = ({ toggleMenuOpen, isOpened }) => {
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
				<Tooltip title="Меню">
					<Button  type='primary' icon={<ShoppingCartOutlined />} > Your Order <span></span> /BYN </Button>
				</Tooltip>
			</Link>
		</div>
	);
};
