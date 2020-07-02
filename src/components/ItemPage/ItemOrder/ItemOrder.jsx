import React, { useState } from "react";
import styles from "./ItemOrder.module.scss";
import Preloader from "../../../common/Preloader/Preloader";
import { Button } from "antd";
import { LikeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ItemQuantitySelection } from "./ItemQuantitySelection";
import { PreloaderHOC } from "../ItemPageHOC";


export const ItemOrderMemo = React.memo(function ItemOrder({
	HingeInfo,
	addToCart,
	setInCart,
	removeFromCart,
	addToLikedTC,
	removeFromLikedTC,
	setInLiked,
}) {
	

	const  [quantity, setQuantity] = useState(HingeInfo.cartInfo.cartQuantity);

	const setValue = (event) => {
		return setQuantity(+event.currentTarget.value);
	};

	// if (!HingeInfo) {
	// 	return <Preloader />;
	// }

	return (
		<div className={styles.itemorderContainer}>
			<p className={styles.costHeader}>
				Стоимость
				<span className={styles.itemPrice}>{HingeInfo.price}</span>
			</p>
			<div>
				<p className={styles.quantity}>
					Количество {quantity} на сумму {HingeInfo.price * quantity} руб.
				</p>

				<ItemQuantitySelection
					HingeInfo={HingeInfo}
					quantity={quantity}
					setQuantity={setQuantity}
					setInCart={setInCart}
					setValue={setValue}
				/>

				{HingeInfo.cartInfo.isInCart ? (
					<Button
						icon={<ShoppingCartOutlined />}
						onClick={() => {
							removeFromCart(HingeInfo);
							setInCart(HingeInfo, false, 1);
						}}
					>
						Убрать из корзины
					</Button>
				) : (
					<Button
						icon={<ShoppingCartOutlined />}
						type={"primary"}
						className={styles.addToCartBtn}
						onClick={() => {
							setInCart(HingeInfo, true, quantity);
							addToCart(HingeInfo, true, quantity);
						}}
					>
						Добавить в корзину
					</Button>
				)}

				{HingeInfo.isInLiked ? (
					<Button
						icon={<LikeOutlined />}
						className={styles.addToFavourites}
						onClick={() => {
							removeFromLikedTC(HingeInfo);
							setInLiked(HingeInfo);
						}}
					>
						Убрать из избранного
					</Button>
				) : (
					<Button
						icon={<LikeOutlined />}
						type={"primary"}
						className={styles.addToFavourites}
						onClick={() => {
							setInLiked(HingeInfo);
							addToLikedTC(HingeInfo);
						}}
					>
						Добавить в избранное
					</Button>
				)}
			</div>
		</div>
	);
});

export const  ItemOrederWithHOC =  PreloaderHOC(ItemOrderMemo) 