import React, { useState } from "react";
import styles from "./ItemPhoto.module.scss";
import Preloader from "../../../common/Preloader/Preloader";
import { PreloaderHOC } from "../ItemPageHOC";



export const ItemPhoto = (props) => {
    
    const [MainSlidePhoto, setMainSlidePhoto] = useState(props.photoes.MainPhoto);

	if (!props) {
		return <Preloader />;
	}
	
	const minislidesArray = Object.keys(props.photoes);
	const minislides = minislidesArray.map((item, i) => {
		return (
			<div
				className={
					props.photoes[item] === MainSlidePhoto
						? styles.miniSlide + " " + styles.active
						: styles.miniSlide
				}
                key={i}
                
			>
				<img
					className={styles.miniSlidePict}
					src={props.photoes[item]}
                    alt=""
                    onClick={(event) => setMainSlidePhoto(event.currentTarget.src)}
				/>
			</div>
		);
	});
	return (
		<div className={styles.container}>
			<div className={styles.mainSlide}>
				<img className={styles.mainSlidePict} src={MainSlidePhoto} alt="" />
			</div>
			<p className={styles.hint}>Для увеличения нажмите на изображение</p>
			<div className={styles.miniSlidesContainer}>{minislides}</div>
		</div>
	);
};

export default  PreloaderHOC(ItemPhoto) 



