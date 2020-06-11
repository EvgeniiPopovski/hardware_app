import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import BurgerButton from "../../common/BurgerButton/BurgerButton";

export const Header = ({toggleMenuOpen , isOpened}) => {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.menuBurgerContainer}>
				<BurgerButton toggleMenuOpen={toggleMenuOpen} />
				<h1 className={styles.logo}>
					<Link to="/" className={styles.link}>
						Almaz-Luks
					</Link>
				</h1>
			</div>
			<div className={styles.input}>
				<input type="text" placeholder="Search..." />
				<button>Search</button>
			</div>
			<Link to="/" className={styles.link}>
				<div className={styles.cart}>
					<img
						src="https://img.icons8.com/cotton/40/000000/shopping-cart--v1.png"
						alt="cart"
					/>
					Your Order <span></span> /BYN
				</div>
			</Link>
		</div>
	);
};
