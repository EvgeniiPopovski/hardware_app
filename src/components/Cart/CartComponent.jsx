import React from 'react'
import styles from './Cart.module.scss'
import { CartItem } from './CartItem/CartItem'

const CartComponent = () => { 
    return (
        <div className={styles.container}>
            <CartItem/>
        </div>
    )
}

export {CartComponent};