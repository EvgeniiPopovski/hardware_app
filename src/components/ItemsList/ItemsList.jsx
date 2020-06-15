import React, { useEffect } from "react";
import styles from "./ItemsList.module.scss";
import { PreviewItemCard } from "../PreviewItemCards/PreviewItemCard";
import Filter from "./../FilterSection/Filter";

export const ItemsList = ({ hingesList, getHingesList }) => {
	useEffect(() => {
		getHingesList();
	}, []);

	const hinges = hingesList.map((hinge, i) => (
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
			<Filter />
			<div className={styles.itemsContainer}>
                {hinges}
            </div>
		</div>
	);
};
