import React from "react";
import styles from "./Filter.module.scss";

const Filter = ({material,color, setMaterial}) => {
	
	const materialCheckboxes = []
	for (let materialItem in material) {
		
		if (materialItem === 'zink') {
			materialCheckboxes.push(<label> цинковый сплав<input type='checkbox' value={material} onChange={() => setMaterial({zink : !material.zink})} />  </label>)
		}
		if (materialItem === 'brass') {
			materialCheckboxes.push(<label> латунь<input type='checkbox' value={material} onChange={() => setMaterial(!materialItem)} />  </label>)
		}
	} 
	console.log(materialCheckboxes)
	return (
		<div className={styles.filterSection}>
			<form action="post" name="filter">
				<p className={styles.filterHeader}>Материал</p>
				
				{materialCheckboxes}

				<br />
				<p className={styles.filterHeader}>Цвет</p>
                {/* {colorCheckboxes} */}
			</form>
		</div>
	);
};

export default Filter;
