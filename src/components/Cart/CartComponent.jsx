import React, { useEffect } from "react";
import styles from "./Cart.module.scss";
import { CartItem } from "./CartItem/CartItem";

const CartComponent = (props) => {
	useEffect(() => {
		props.getCartItems();
	}, []);

	let cartItemsArr = [];
	for (let item in props.cartItems) {
		cartItemsArr.push(props.cartItems[item]);
	}

	let renderArr = cartItemsArr.map((item, i) => (
		<CartItem
			key={i}
			ArticleNumber={item.ArticleNumber}
			cartInfo={item.cartInfo}
			description={item.description}
			header={item.header}
			isInLiked={item.isInLiked}
			photoes={item.photoes}
			price={item.price}
		/>
	));

	return (
		<div className={styles.center}>
			<div className={styles.wrapper}>{renderArr}</div>
		</div>
	);
};

export { CartComponent };
