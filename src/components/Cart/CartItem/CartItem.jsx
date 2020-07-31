import React from "react";
import styles from "./CartItem.module.scss";

import { Input, Button } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined, StarFilled , StarOutlined } from "@ant-design/icons";

const CartItem = ({
	HingeInfo,
	ArticleNumber,
	cartInfo,
	description,
	header,
	isInLiked,
	photoes,
	price,
	setCartQuantityTC,
	removeFromCart,
	setInCartTC,
	removeFromLiked,
	addToLiked,
	toggleInCartLikedItemTC

}) => {
	let divImage = {
		backgroundImage: "url(" + photoes.MainPhoto + ")",
	};
	return (
		<div className={styles.itemContainer}>
			<h2 className={styles.itemHeader}>{header}</h2>
			<div className={styles.itemInformation}>
				<div className={styles.descriptionContainer}>
					<div className={styles.itemImg} style={divImage}></div>
					<div className={styles.itemDescription}>
						<p>Атикул : {ArticleNumber}</p>
						<p>Цвет : {description.color}</p>
						<p>Материал : {description.material}</p>
					</div>
				</div>

				<div>
					<Button
						type={"primary"}
						disabled={HingeInfo.cartInfo.cartQuantity === 1}
						icon={<MinusOutlined />}
						onClick={() =>
							setCartQuantityTC(
								HingeInfo,
								HingeInfo.cartInfo.cartQuantity - 1
							)
						}
					/>
					<Input
						className={styles.cartInput}
						value={cartInfo.cartQuantity}
						onChange={(event) =>
							setCartQuantityTC(HingeInfo, +event.currentTarget.value)
						}
					/>
					<Button
						type={"primary"}
						icon={<PlusOutlined />}
						onClick={() =>
							setCartQuantityTC(
								HingeInfo,
								HingeInfo.cartInfo.cartQuantity + 1
							)
						}
					/>
					<p className={styles.price}>
						Стоимость: {price * cartInfo.cartQuantity}руб (
						{cartInfo.cartQuantity}шт * {price}руб)
					</p>
				</div>
				<Button
					type={"primary"}
					icon={<DeleteOutlined />}
					onClick={() => {
						removeFromCart(HingeInfo);
						setInCartTC(HingeInfo, false, 1);
						
					}}
				>
					Удалить
				</Button>
			</div>
			{isInLiked ? (
				<StarFilled
					className={styles.starFilled}
					onClick={() => {
						removeFromLiked(HingeInfo);
						toggleInCartLikedItemTC(HingeInfo, false)
					}}
				/>
			) : (
				<StarOutlined
					className={styles.starOutlined}
					onClick={() => {
						addToLiked(HingeInfo);
						toggleInCartLikedItemTC(HingeInfo , true)
					}}
				/>
			)}
		</div>
	);
};

export { CartItem };
