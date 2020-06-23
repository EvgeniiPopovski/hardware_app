import React, { useEffect } from 'react'
import styles from './ItemPage.module.scss'
import  ItemPhoto  from './ItemPhoto/ItemPhoto'
import { ItemDescription } from './ItemDescription/ItemDescription'

import { connect } from 'react-redux'
import { getHingesListTC, setInCart, isLikedToggleAC } from '../../redux/hingesListReduser'
import { addToCartAC, removeFromCartAC } from '../../redux/cartReducer'
import { ItemOrderMemo } from './ItemOrder/ItemOrder'
import { addToLikedAC, removeFromLikedAC } from '../../redux/likedItemsReducer'




const  ItemPageMemo = React.memo( function ItemPage ({hingesList, ...props})  {
    
    useEffect(() => {
        props.getHingesList();
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
        addToCart : (item , isInCart , quantity) => {dispatch(addToCartAC(item , isInCart , quantity))},
        setInCart : (item , isInCart , quantity) => {dispatch(setInCart(item , isInCart , quantity))},
        isLikedToggle: (item) => {dispatch(isLikedToggleAC(item))},
        removeFromCart: (item) => {dispatch(removeFromCartAC(item))},
        addToLiked : (item , isInLiked) => {dispatch(addToLikedAC(item, isInLiked))},
        removeFromLiked : (item) => {dispatch(removeFromLikedAC(item))} 

    }
}


export const ItemPageContainer = connect(mapStateToProps , mapDispatchToProps) (ItemPageMemo)