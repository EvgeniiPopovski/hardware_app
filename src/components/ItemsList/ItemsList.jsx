import React, { useEffect } from "react";
import styles from "./ItemsList.module.scss";
import { PreviewItemCard } from "../PreviewItemCards/PreviewItemCard";
import Filter from "./../FilterSection/Filter";

export const ItemsList = ({ hingesList, getHingesList }) => {
	useEffect(() => {
		getHingesList();
	}, []);

	const materials = React.useMemo(
		() => [...new Set(hingesList.map((hinge) => hinge.description.material))],
		[hingesList]
	);
	const colors = React.useMemo(
		() => [...new Set(hingesList.map((hinge) => hinge.description.color))],
		[hingesList]
	);

	const [material, setMaterial] = React.useState([]);
	const [color, setColor] = React.useState([]);

	const onMaterialChange = ({ target: { checked, value } }) => {
		setMaterial(
			!material.includes(value) && checked
				? [...material, value]
				: material.filter((n) => n !== value)
		);
	};
	const onColorChange = ({ target: { checked, value } }) => {
		setColor(
			!color.includes(value) && checked
				? [...color, value]
				: color.filter((n) => n !== value)
		);
	};

	const filteredHinges = hingesList.filter(
		(hinge) =>
			(!material.length || material.includes(hinge.description.material)) &&
			(!color.length || color.includes(hinge.description.color))
	);

	let renderHinges = filteredHinges.map((hinge, i) => (
		<PreviewItemCard
			key={i}
			header={hinge.header}
			article={hinge.ArticleNumber}
			mainPhoto={hinge.photoes.MainPhoto}
			material={hinge.description.material}
			color={hinge.description.color}
			price={hinge.price}
			text={hinge.description.text}
			isInLiked={hinge.isInLiked}
		/>
	));

	return (
		<div className={styles.container}>
			<Filter
				valueMaterial={material}
				valueColor={color}
				materials={materials}
				colors={colors}
				onMaterialChange={onMaterialChange}
				onColorChange={onColorChange}
			/>
			<div className={styles.itemsContainer}>{renderHinges}</div>
		</div>
	);
};
