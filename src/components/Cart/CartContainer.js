import { connect } from "react-redux"
import { CartComponent } from "./CartComponent"
import { getCartItemsTC, setCartQuantityTC } from "../../redux/cartReducer"


const mapStateToProps = (state) => {
    return {
        cartItems : state.Cart[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: () => {dispatch(getCartItemsTC())},
        setCartQuantityTC: (item , quantity) => {dispatch(setCartQuantityTC(item , quantity))}
    }
}

export const CartContainer = connect(mapStateToProps , mapDispatchToProps)(CartComponent)