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
	addToLiked
}) {
	const [quantity, setQuantity] = useState(1);

	const setValue = (event) => {
		return setQuantity(+event.currentTarget.value);
	};

	if (!HingeInfo) {
		return <Preloader />;
	}

	const onAddToCart = (Item, quantity) => {
		setInCart(Item, true, quantity);
		addToCart(HingeInfo)
	};

	return (
		<div className={styles.itemorderContainer}>
			<p className={styles.costHeader}>
				Стоимость <span className={styles.itemPrice}>{HingeInfo.price * quantity}</span>
			</p>
			<div>
				<p className={styles.quantity}>Количество</p>
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
				{/* <button className={styles.itemIncrease} onClick={ () => setQuantity(quantity+1)} >+</button> */}
				<Button
					icon={<ShoppingCartOutlined />}
					type={"primary"}
					className={styles.addToCartBtn}
					onClick={() => {
						onAddToCart(HingeInfo, quantity);
					}}
				>
					Добавить в корзину
				</Button>
				<Button
					icon={<LikeOutlined />}
					type={"primary"}
					className={styles.addToFavourites}
					onClick ={()=> {addToLiked(HingeInfo)}}
				>
					Добавить в избранное
				</Button>
			</div>
		</div>
	);
});
