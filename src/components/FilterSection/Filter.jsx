import React from "react";
import styles from "./Filter.module.scss";
import { Checkbox } from "antd";

const Filter = ({
	valueMaterial,
	onMaterialChange,
	materials,
	colors,
	onColorChange,
	valueColor,
}) => {
	
	let materialCheckboxes = materials.map((material) => (
		<>
		<label className="material" key={material}>
			<Checkbox
				value={material}
				checked={valueMaterial.includes(material)}
				onChange={onMaterialChange}
			/>
			{material}
		</label>
		<br/>
		</>
	));

	let colorCheckboxes = colors.map((color) => (
		<>
			<label className="color" key={color}>
				<Checkbox
					value={color}
					checked={valueColor.includes(color)}
					onChange={onColorChange}
				/>
				{color}
			</label>
			<br />
		</>
	));
	
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

// 	hingesList,
// 	setzinkFilter,
// 	setbrassFilter,
// 	brassFilter,
// 	zinkFilter,
// 	chromeColorFilter,
// 	setchromeColorFilter,
// 	blackColorFilter,
// 	setBlackColorFilter
// }) => {
// 	let materialsArray = hingesList.map((hinge) => hinge.description.material);
// 	let materialsFilterd = [];
// 	for (let str of materialsArray) {
// 		if (!materialsFilterd.includes(str)) {
// 			materialsFilterd.push(str);
// 		}
// 	}

// 	let materialCheckboxes = materialsFilterd.map((material) => {
// 		let value = "brass";
// 		let setFilter = setbrassFilter;
// 		let filterOption = brassFilter;
// 		if (material == "цинковый сплав") {
// 			value = "zink";
// 			setFilter = setzinkFilter;
// 			filterOption = zinkFilter;
// 		}
// 		return (
// 			<>
// 				<label key={material}>
// 					{material}
// 					<input
// 						type="checkbox"
// 						name="filter"
// 						value={value}
// 						onChange={() => {
// 							setFilter(!filterOption);
// 						}}
// 					/>
// 				</label>
// 				<br />
// 			</>
// 		);
// 	});

// 	// TODO
// 	let colorsArray = hingesList.map((hinge) => hinge.description.color);
// 	let colorsFilterd = [];
// 	for (let str of colorsArray) {
// 		if (!colorsFilterd.includes(str)) {
// 			colorsFilterd.push(str);
// 		}
// 	}

// 	let colorCheckboxes = colorsFilterd.map((color) => {
// 		let value = "chrome";
// 		let setColorFilter = setchromeColorFilter;
// 		let filterColorOption = chromeColorFilter;
// 		if (color == "черный") {
// 			value = "black";
// 			setColorFilter = setBlackColorFilter;
// 			filterColorOption = blackColorFilter;
// 		}
// 		return (
// 			<>
// 				<label key={color}>
// 					{color}
// 					<input
// 						type="checkbox"
// 						name="filter"
// 						value={value}
// 						onChange={() => {
// 							setColorFilter(!filterColorOption)
// 							console.log(blackColorFilter , chromeColorFilter);
// 						}}
// 					/>
// 				</label>
// 				<br />
// 			</>
// 		);
// 	});
