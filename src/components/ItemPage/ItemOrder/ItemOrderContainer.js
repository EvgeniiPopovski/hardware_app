import { connect } from "react-redux"
import { ItemOrderMemo } from "./ItemOrder"
import {  setInCart, addToLikedAC } from "../../../redux/hingesListReduser"
import  { addToCartAC } from "../../../redux/cartReducer"




const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (item) => {dispatch(addToCartAC(item))},
        setInCart : (item , isInCart , quantity) => {dispatch(setInCart(item , isInCart , quantity))},
        addToLiked: (item) => {dispatch(addToLikedAC(item))}
    }
}

export const ItemOrderContainer = connect(mapStateToProps , mapDispatchToProps) (ItemOrderMemo)