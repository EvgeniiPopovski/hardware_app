import React from 'react';
import styles from './../Main.module.scss'
import { Link } from 'react-router-dom';

export default function HardwareSections (props) {
    return (
        <div className={styles.menuBlock}>
            <img className={styles.imgBlock} src={props.imgSrc} alt="hardware section"/>
            <Link to={props.link} className={styles.menuBlockHeader}>{props.header}</Link>
        </div>
    )
}