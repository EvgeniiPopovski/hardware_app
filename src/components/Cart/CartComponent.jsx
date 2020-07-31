import React, { useEffect } from "react";
import styles from "./Cart.module.scss";
import { CartItem } from "./CartItem/CartItem";

const CartComponent = (props) => {
	useEffect(() => {
		props.getCartItems();
	}, []);
	useEffect(() => {
		props.getHingesListTC()
	}, [])
	useEffect(() => {
		props.getLikedList()
	}, [])

	let cartItemsArr = [];
	for (let item in props.cartItems) {
		cartItemsArr.push(props.cartItems[item]);
	}

	let renderArr = cartItemsArr.map((item, i) => (
		<CartItem
			HingeInfo={item}
			key={i}
			ArticleNumber={item.ArticleNumber}
			cartInfo={item.cartInfo}
			description={item.description}
			header={item.header}
			isInLiked={item.isInLiked}
			photoes={item.photoes}
			price={item.price}
			setCartQuantityTC={props.setCartQuantityTC}
			removeFromCart = {props.removeFromCart}
			setInCartTC={props.setInCartTC}
			removeFromLiked={props.removeFromLiked}
			setInLiked={props.setInLiked}
			addToLiked={props.addToLiked}
			toggleInCartLikedItemTC={props.toggleInCartLikedItemTC}
			
		/>
	));

	return (
		<div className={styles.center}>
			{props.cartItems ? <div className={styles.wrapper}>{renderArr}</div> : <div>Карзина пуста. Перейти к каталогу</div> }
			
		</div>
	);
};

export { CartComponent };
