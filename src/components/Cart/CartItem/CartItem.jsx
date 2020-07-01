import React from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({
	ArticleNumber,
	cartInfo,
	description,
	header,
	isInLiked,
	photoes,
	price,
}) => {
    let divImage = {
		backgroundImage: "url(" + photoes.MainPhoto + ")",
	};

	return (
		<div className={styles.itemContainer}>
			<h2 className={styles.itemHeader}>{header}</h2>
			<div className={styles.descriptionContainer}>
				<div className={styles.itemImg} style={divImage}></div>
                <div>
                    <p>Атикул : {ArticleNumber}</p>
                    <p>Цвет : {description.color}</p>
                    <p>Материал : {description.material}</p>
                </div>
				
				
				<p>{price}</p>
			</div>
		</div>
	);
};

export { CartItem };
