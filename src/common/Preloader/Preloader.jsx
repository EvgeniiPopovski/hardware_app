import React from "react";
import styles from './css/Preloader.module.css'



const Preloader = () => {
	return (
		<div id={styles.cubeLoader}>
			<div className={styles.caption}>
				<div className={styles.cubeLoader}>
					<div className={styles.cube +" "+styles.loader1}></div>
					<div className={styles.cube +" "+ styles.loader2}></div>
					<div className={styles.cube +" "+ styles.loader3}></div>
					<div className={styles.cube +" "+styles.loader4}></div>
				</div>
			</div>
		</div>
	);
};

export default Preloader