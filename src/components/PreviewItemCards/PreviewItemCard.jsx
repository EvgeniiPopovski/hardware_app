import React from "react";
import styles from './PreviewItemCard.module.scss'


export const PreviewItemCard = (props) => {
	let divImage = {
		backgroundImage : 'url(' + props.mainPhoto + ')'
	}
	
	
	return (
		<div>
			<div className={styles.propertyCard}>
				<a href="#">
					<div className={styles.propertyImage} style={divImage}>
						<div className={styles.propertyImageTitle}>
							{/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
						</div>
					</div>
				</a>
				<div className={styles.propertyDescription}>
					<h5 className={styles.cardTitle}> {props.header} {props.article}</h5>
					<span>  </span>
					<p className={styles.cardText}>
						{props.text}
					</p>
				</div>
				{/* <a href="#">
					<div className={styles.propertySocialIcons}>
						<!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions -->
					</div>
				</a> */}
			</div>
		</div>
	);
};

