import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = (props) => {
	return (
		<div className={styles.headerContainer}>
			<h1 className={styles.logo}>
				<Link to="/" className={styles.link}>
					Almaz-Luks
				</Link>
			</h1>
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
