import React from "react";
import button from './../img/icons8-menu.svg';
import styles from './BurgerButton.module.scss';

const BurgerButton = ({toggleMenuOpen}) => {
	return <div className={styles.burgerButton}>
        <img src={button} alt="button SVG" onClick={toggleMenuOpen}/>
    </div>
    
};

export default BurgerButton;
