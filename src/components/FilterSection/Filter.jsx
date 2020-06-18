import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({
	hingesList,
	setzinkFilter,
	setbrassFilter,
	brassFilter,
	zinkFilter,
	chromeColorFilter,
	setchromeColorFilter,
}) => {
	let materialsArray = hingesList.map((hinge) => hinge.description.material);
	let materialsFilterd = [];
	for (let str of materialsArray) {
		if (!materialsFilterd.includes(str)) {
			materialsFilterd.push(str);
		}
	}

	let materialCheckboxes = materialsFilterd.map((material) => {
		let value = "brass";
		let setFilter = setbrassFilter;
		let filterOption = brassFilter;
		if (material == "цинковый сплав") {
			value = "zink";
			setFilter = setzinkFilter;
			filterOption = zinkFilter;
		}
		return (
			<>
				<label key={material}>
					{material}{" "}
					<input
						type="checkbox"
						name="filter"
						value={value}
						onChange={() => {
							setFilter(!filterOption);
							console.log(brassFilter, zinkFilter);
						}}
					/>
				</label>{" "}
				<br />
			</>
		);
	});

	let colorsArray = hingesList.map((hinge) => hinge.description.color);
	let colorsFilterd = [];
	for (let str of colorsArray) {
		if (!colorsFilterd.includes(str)) {
			colorsFilterd.push(str);
		}
	}

	let colorCheckboxes = colorsFilterd.map((material) => {
		let value = "хром";
		let setFilter = setchromeColorFilter;
		let filterOption = chromeColorFilter;
		return (
			<>
				<label key={material}>
					{material}
					<input
						type="checkbox"
						name="filter"
						value={value}
						onChange={() => {
							setFilter(!filterOption);
						}}
					/>
				</label>
				<br />
			</>
		);
	});

	return (
		<div className={styles.filterSection}>
			<form action="post" name="filter">
				<p className={styles.filterHeader}>Материал</p>
				{materialCheckboxes}
				<br />
				<p className={styles.filterHeader}>Цвет</p>
                {colorCheckboxes}
			</form>
		</div>
	);
};

export default Filter;
