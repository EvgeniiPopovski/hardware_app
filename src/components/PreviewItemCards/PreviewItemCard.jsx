import React from "react";
import styles from "./PreviewItemCard.module.scss";
import { Link } from "react-router-dom";
import { StarFilled , StarOutlined} from '@ant-design/icons'


export const PreviewItemCard = (props) => {
	let divImage = {
		backgroundImage: "url(" + props.mainPhoto + ")",
	};



	return (
		<div>
			<div className={styles.propertyCard}>
				{props.isInLiked 
				? <StarFilled className={styles.starFilled} 
					onClick={ () => {props.removeFromLiked(props.hingeInfo) 
										props.setInLiked(props.hingeInfo)}} /> 

				: <StarOutlined className={styles.starOutlined}
					onClick={() => {props.setInLiked(props.hingeInfo)
									props.addToLiked(props.hingeInfo)}} />}
				
				<Link to={`/shower/showerHinges/${props.article}`}>
					<div className={styles.propertyImage} style={divImage}>
						<div className={styles.propertyImageTitle}>
							{/* <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. --> */}
						</div>
					</div>
				</Link>
				<div className={styles.propertyDescription}>
					<h5 className={styles.cardTitle}>
						{props.header} {props.article}
					</h5>
					<span> </span>
					<p className={styles.cardText}>{props.text}</p>
				</div>
					<div className={styles.propertySocialIcons}>
						{props.price}
					</div>
			</div>
		</div>
	);
};
