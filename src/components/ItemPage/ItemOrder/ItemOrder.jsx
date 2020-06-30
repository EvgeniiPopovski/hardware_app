import React, { useState } from "react";
import styles from "./ItemOrder.module.scss";
import Preloader from "../../../common/Preloader/Preloader";
import { Button, Tooltip } from "antd";
import {
	MinusOutlined,
	PlusOutlined,
	LikeOutlined,
	ShoppingCartOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

export const ItemOrderMemo = React.memo(function ItemOrder({
	HingeInfo,
	addToCart,
	setInCart,
	removeFromCart,
	addToLikedTC,
	removeTC,
	setInLiked,
}) {
	const [quantity, setQuantity] = useState(1);

	const setValue = (event) => {
		return setQuantity(+event.currentTarget.value);
	};

	if (!HingeInfo) {
		return <Preloader />;
	}

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
				<Tooltip title="уменьшить">
					<Button
						type={"primary"}
						disabled={quantity <= 1 && true}
						icon={<MinusOutlined />}
						onClick={() => setQuantity(quantity - 1)}
					/>
				</Tooltip>
				<Input
					className={styles.itemCounter}
					step="1"
					min="1"
					type="text"
					value={quantity}
					onChange={(event) => setValue(event)}
				/>
				<Tooltip title="увеличить">
					<Button
						type={"primary"}
						icon={<PlusOutlined />}
						onClick={() => setQuantity(quantity + 1)}
					/>
				</Tooltip>
				{HingeInfo.cartInfo.isInCart ? (
					<Button
						icon={<ShoppingCartOutlined />}
						onClick={() => {
							removeFromCart(HingeInfo);
							setInCart(HingeInfo, false, 0);
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
							removeTC(HingeInfo);
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
