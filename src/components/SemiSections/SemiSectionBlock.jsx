import React from 'react';
import styles from './SemiSection.module.scss'
import { Link } from 'react-router-dom';



export default function SemisectionBlocks (props) {
    return (
        <div className={styles.semisectionBlock}>
            <img className={styles.imgBlock} src={props.src} alt='hardware'/>
            <Link to={props.link} className={styles.semisectionBlockHeader}>{props.header}</Link>
        </div>
    )
}