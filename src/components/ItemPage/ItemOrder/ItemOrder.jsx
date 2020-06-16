import React from "react";
import styles from "./ItemOrder.module.scss";
import Preloader from '../../../common/Preloader/Preloader'

export const ItemOrder = ({HingeInfo}) => {
	if (!HingeInfo) {
        return <Preloader/>
    }  
	return (
		<div className={styles.itemorderContainer}>
			<p className={styles.costHeader}>
				Стоимость <span className={styles.itemPrice}>Значение стоимости</span>
			</p>
			<div>
				<p className={styles.quantity}>Количество</p>
				<span className={styles.itemDecrease}>-</span>
				<input
					className={styles.itemCounter}
					step="1"
					min="1"
					type="text"
					defaultValue="1"
				/>
				<span className={styles.itemIncrease}>+</span>
				<button className={styles.addToCartBtn}>Добавить в корзину</button>

				<button className={styles.addToFavourites}>Добавить в избранное</button>
			</div>
		</div>
	);
};
