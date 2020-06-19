import React, { useEffect} from "react";
import styles from "./ItemsList.module.scss";
import { PreviewItemCard } from "../PreviewItemCards/PreviewItemCard";

import { FilterContainer } from "../FilterSection/FilterContainer";

export const ItemsList = ({ hingesList, getHingesList }) => {
	useEffect(() => {
		getHingesList();
	}, []);

	let hinges = hingesList.map((hinge, i) => (
		<PreviewItemCard
			key={i}
			header={hinge.header}
			article={hinge.ArticleNumber}
			mainPhoto={hinge.photoes.MainPhoto}
			material={hinge.description.material}
			color={hinge.description.color}
			price={hinge.price}
			text={hinge.description.text}
		/>
	));

	

	return (
		<div className={styles.container}>
			<FilterContainer/>
			<div className={styles.itemsContainer}>
				{hinges}
			</div>
		</div>
	);
};
