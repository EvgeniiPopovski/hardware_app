import React from "react";

import styles from "./Auth.module.scss";
import { Registration } from "./Registration/Registration";


const Auth = (props) => {
	
	return (
		<div className={styles.authContainer}>
			<Registration {...props} />
			{/* <Login /> */}
		</div>
	);
};

export { Auth };
