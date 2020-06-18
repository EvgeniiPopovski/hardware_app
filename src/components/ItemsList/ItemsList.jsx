import React, { useEffect, useState } from "react";
import styles from "./ItemsList.module.scss";
import { PreviewItemCard } from "../PreviewItemCards/PreviewItemCard";
import Filter from "./../FilterSection/Filter";

export const ItemsList = ({ hingesList, getHingesList }) => {
	useEffect(() => {
		getHingesList();
	}, []);

	const [zinkFilter, setzinkFilter] = useState(false);
	const [brassFilter, setbrassFilter] = useState(false);

	const [chromeColorFilter, setchromeColorFilter] = useState(false);

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

	function filterZink() {
		const zinkHinges = hinges.filter(
			(PreviewItemCard) => PreviewItemCard.props.material === "цинковый сплав"
		);
		return zinkHinges;
	}
	function filterBrass() {
		const brassHinges = hinges.filter(
			(PreviewItemCard) => PreviewItemCard.props.material === "латунь"
		);
		return brassHinges;
	}

	return (
		<div className={styles.container}>
			<Filter
				hingesList={hingesList}
				setzinkFilter={setzinkFilter}
				zinkFilter={zinkFilter}
				setbrassFilter={setbrassFilter}
                brassFilter={brassFilter}
                chromeColorFilter={chromeColorFilter}
                setchromeColorFilter={setchromeColorFilter}

			/>
			<div className={styles.itemsContainer}>
				{zinkFilter && zinkFilter !== brassFilter && filterZink()}
				{brassFilter && zinkFilter !== brassFilter && filterBrass()}
				{zinkFilter == brassFilter && hinges}
			</div>
		</div>
	);
};
