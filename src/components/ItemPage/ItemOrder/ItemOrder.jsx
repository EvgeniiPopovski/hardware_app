import React, { useState } from "react";
import styles from "./ItemOrder.module.scss";
import Preloader from "../../../common/Preloader/Preloader";

export const ItemOrderMemo =  React.memo( function ItemOrder  ({ HingeInfo })  {
	
	
	const [quantity, setQuantity] = useState(1)

	
	const setValue = (event) => {
		return setQuantity(+event.currentTarget.value)
	}
	
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
				<button disabled={quantity===1 && true} className={styles.itemDecrease} onClick={() =>setQuantity(quantity-1)} >-</button>
				<input
					className={styles.itemCounter}
					step="1"
					min="1"
					type="text"
					value={quantity}
					onChange={(event) => setValue(event)}
				/>
				<button className={styles.itemIncrease} onClick={ () => setQuantity(quantity+1)} >+</button>
				<button className={styles.addToCartBtn}>Добавить в корзину</button>
				<button className={styles.addToFavourites}>Добавить в избранное</button>
			</div>
		</div>
	);
});
