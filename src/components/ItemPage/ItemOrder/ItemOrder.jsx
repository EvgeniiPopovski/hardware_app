import React, { useState } from "react";
import styles from "./ItemOrder.module.scss";
import Preloader from "../../../common/Preloader/Preloader";

export const ItemOrder = ({ HingeInfo }) => {
	
	
	const [quantity, setQuantity] = useState(1)

	
	
	if (!HingeInfo) {
		return <Preloader />;
	}

	return (
		<div className={styles.itemorderContainer}>
			<p className={styles.costHeader}>
				Стоимость <span className={styles.itemPrice}>{HingeInfo.price}</span>
			</p>
			<div>
				<p className={styles.quantity}>Количество</p>
				<span className={styles.itemDecrease} onClick={() =>setQuantity(quantity-1)}>-</span>
				<input
					className={styles.itemCounter}
					step="1"
					min="1"
					type="text"
					defaultValue={quantity}
				/>
				<span className={styles.itemIncrease} onClick={ () => setQuantity(quantity+1)} >+</span>
				{console.log(quantity)}
				<button className={styles.addToCartBtn}>Добавить в корзину</button>

				<button className={styles.addToFavourites}>Добавить в избранное</button>
			</div>
		</div>
	);
};
