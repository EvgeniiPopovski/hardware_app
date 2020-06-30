import React, { useEffect } from 'react'
import styles from './ItemPage.module.scss'
import  ItemPhoto  from './ItemPhoto/ItemPhoto'
import { ItemDescription } from './ItemDescription/ItemDescription'

import { connect } from 'react-redux'
import { getHingesListTC,  setInLikedTC, setInCartTC } from '../../redux/hingesListReduser'
import {  addToCartTC, removeFromCartTC, getCartItemsTC } from '../../redux/cartReducer'
import { ItemOrderMemo } from './ItemOrder/ItemOrder'
import { addToLikedTC, removeTC, setLikedItemsTC } from '../../redux/likedItemsReducer'




const  ItemPageMemo = React.memo( function ItemPage ({hingesList, ...props})  {
    
    useEffect(() => {
        props.getHingesList();
    }, [])
    useEffect( () => {
		props.getCartItems();
	},[]) 

	useEffect ( () => {
		props.getLikedItems()
    }, [])
    
    const filteredItem = hingesList.filter( (hinge) => hinge.ArticleNumber === props.match.params.article )
    

    
    return(
        <div className={styles.Container}>
            <ItemPhoto HingeInfo={filteredItem[0]}/>
            <ItemOrderMemo {...props} HingeInfo={filteredItem[0]}/>
            <ItemDescription HingeInfo={filteredItem[0]}/>
        </div>
    )
})



const mapStateToProps = (state) => {
    return {
        hingesList: state.HingesList.Hinges,
        isLoading : state.HingesList.isLoading,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHingesList : () => {dispatch(getHingesListTC())},
        getCartItems: () => {dispatch(getCartItemsTC())},
        getLikedItems: () => {dispatch(setLikedItemsTC())},
        addToCart : (item , isInCart , quantity) => {dispatch(addToCartTC(item , isInCart , quantity))},
        setInCart : (item , isInCart , quantity) => {dispatch(setInCartTC(item , isInCart , quantity))},
        removeFromCart: (item) => {dispatch(removeFromCartTC(item))},
        setInLiked : (item) => {dispatch(setInLikedTC(item))},
        addToLikedTC : (item) => {dispatch(addToLikedTC(item))},
        removeTC : (item) => {dispatch(removeTC(item))}
    }
}


export const ItemPageContainer = connect(mapStateToProps , mapDispatchToProps) (ItemPageMemo)