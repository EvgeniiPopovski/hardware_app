import { connect } from "react-redux"
import { CartComponent } from "./CartComponent"
import { getCartItemsTC, setCartQuantityTC, removeFromCartTC, toggleInCartLikedItemTC } from "../../redux/cartReducer"
import { getHingesListTC, setInCartTC, setInLikedTC } from "../../redux/hingesListReduser"
import { removeTC, addToLikedTC, setLikedItemsTC } from "../../redux/likedItemsReducer"


const mapStateToProps = (state) => {
    return {
        cartItems : state.Cart[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: () => {dispatch(getCartItemsTC())},
        setCartQuantityTC: (item , quantity) => {dispatch(setCartQuantityTC(item , quantity))},
        getHingesListTC: () => {dispatch(getHingesListTC())},
        removeFromCart: (item) => {dispatch(removeFromCartTC(item))},
        setInCartTC: (item , isInCart , quantity) => {dispatch(setInCartTC(item , isInCart , quantity))},
        removeFromLiked : (HingeInfo) => {dispatch(removeTC(HingeInfo))},
        // setInLiked: (HingeInfo) => {dispatch(setInLikedTC(HingeInfo))},
        addToLiked: (HingeInfo) => {dispatch(addToLikedTC(HingeInfo))},
        toggleInCartLikedItemTC: (HingeInfo, isInLiked) => {dispatch(toggleInCartLikedItemTC(HingeInfo , isInLiked))},
        getLikedList: () => {dispatch(setLikedItemsTC())}
    }
}

export const CartContainer = connect(mapStateToProps , mapDispatchToProps)(CartComponent)