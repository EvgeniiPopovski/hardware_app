import React  from "react";
import { NavLink, Link } from "react-router-dom";
// import { MainContainer } from "./../../components/Main/Main";
// import ShowerHardwareContainer from "./../../components/SemiSections/ShowerHardware//ShowerHardwareContainer";
// import BurgerButton from "../BurgerButton/BurgerButton";
import styles from'./BurgerMenu.module.scss'
import {  Button, Tooltip } from "antd";
import {MenuOutlined} from '@ant-design/icons'


const BurgerMenu = ({isOpened , toggleMenuOpen}) => {


	return (
		<div  className={isOpened ? styles.burgerMenu : styles.burgerMenuClosed}>
			<div className={styles.burgerMenuHeader}>
				<Tooltip title="Меню">
					<Button shape='circle' onClick={toggleMenuOpen} icon={<MenuOutlined />} />
				</Tooltip>
				<Link className={styles.link} to="/" > Almaz-Luks </Link>
			</div>

			<ul className={styles.burgerMenuList}>
				<li className={styles.burgerMenuListItem}>
					<NavLink className={styles.burgerMenuLink} exact to="/" onClick={toggleMenuOpen}>
						Главная
					</NavLink>
				</li>
				<li className={styles.burgerMenuListItem}>
					<NavLink className={styles.burgerMenuLink}  exact to="/shower" onClick={toggleMenuOpen}>
						Фурнитура для душевых
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default BurgerMenu;
