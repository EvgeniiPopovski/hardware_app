import React, { useState } from "react";
import styles from "./ItemPhoto.module.scss";
import Preloader from "../../../common/Preloader/Preloader";
import { PreloaderHOC } from "../ItemPageHOC";



export const ItemPhoto = ({HingeInfo}) => {
    
    const [MainSlidePhoto, setMainSlidePhoto] = useState(HingeInfo.photoes.MainPhoto);

	// if (!HingeInfo) {
	// 	return <Preloader />;
	// }
	
	const minislidesArray = Object.keys(HingeInfo.photoes);
	const minislides = minislidesArray.map((item, i) => {
		return (
			<div
				className={
					HingeInfo.photoes[item] === MainSlidePhoto
						? styles.miniSlide + " " + styles.active
						: styles.miniSlide
				}
                key={i}
                
			>
				<img
					className={styles.miniSlidePict}
					src={HingeInfo.photoes[item]}
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



