import React from "react";
import styles from './PreviewItemCard.module.scss'

export const PreviewItemCard = () => {
	return (
		<div>
			<div className={styles.propertyCard}>
				<a href="#">
					<div className={styles.propertyImage}>
						<div className="property-image-title">
							{/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
						</div>
					</div>
				</a>
				<div className={styles.propertyDescription}>
					<h5 className={styles.cardTitle}> Card Title </h5>
					<p className={styles.cardText}>
						Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
						Bingo. Lorem Ipum doth be hard.
					</p>
				</div>
				<a href="#">
					<div className={styles.propertySocialIcons}>
						{/* <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions --> */}
					</div>
				</a>
			</div>
		</div>
	);
};

