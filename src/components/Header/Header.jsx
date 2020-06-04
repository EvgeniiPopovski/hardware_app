import React from 'react';
import styles from './Header.module.scss';

export const Header = (props) => {
    return (
        <div className={styles.headerContainer}>
            <h1>Almaz-Luks</h1>
        </div>
    )
}