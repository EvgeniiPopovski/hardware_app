import React from 'react'
import styles from "./ItemsList.module.scss"
import { PreviewItemCard } from '../PreviewItemCards/PreviewItemCard'
import Filter from "./../FilterSection/Filter"

export const ItemsList = () => {
    return (
        <div className={styles.container}>
            <Filter />
        <div className={styles.itemsContainer}>
            <PreviewItemCard />
        </div>
        </div>
    )
}