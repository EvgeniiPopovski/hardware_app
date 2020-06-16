import React from 'react'
import styles from './ItemPhoto.module.scss'
import Preloader from '../../../common/Preloader/Preloader'


export const ItemPhoto = ({HingeInfo}) => {
    
    if (!HingeInfo) {
        return <Preloader/>
    }  
    return ( 
        <div className={styles.container}>
            <div className={styles.mainSlide}>
                <img className={styles.mainSlidePict} src={HingeInfo.photoes.MainPhoto} alt=''/>
            </div>
            <p className={styles.hint} >Для увеличения нажмите на изображение</p>
            <div className={styles.miniSlidesContainer}>
                <div className={styles.miniSlide+ " " +styles.active}>
                    <img className={styles.miniSlidePict} src={HingeInfo.photoes.MainPhoto} alt=''/>
                </div>
            </div>
        </div>
    )
}