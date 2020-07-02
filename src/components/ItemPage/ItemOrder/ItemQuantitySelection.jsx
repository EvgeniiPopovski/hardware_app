import React from "react";
import { Button, Tooltip, Input } from "antd";
import {
	MinusOutlined,
	PlusOutlined,
} from "@ant-design/icons";
import styles from "./ItemOrder.module.scss";

const ItemQuantitySelection = ({ HingeInfo,quantity, setQuantity, setValue }) => {
	return (
		<>
			<Tooltip title="уменьшить">
				<Button
					type={"primary"}
					disabled={(quantity <= 1 && true) || HingeInfo.cartInfo.isInCart}
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
					disabled={HingeInfo.cartInfo.isInCart}
					type={"primary"}
					icon={<PlusOutlined />}
					onClick={() => setQuantity(quantity + 1)}
				/>
			</Tooltip>
		</>
	);
};

export {ItemQuantitySelection}