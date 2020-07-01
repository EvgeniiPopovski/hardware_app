import { connect } from "react-redux"
import { CartComponent } from "./CartComponent"
import { getCartItemsTC } from "../../redux/cartReducer"


const mapStateToProps = (state) => {
    return {
        cartItems : state.Cart[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCartItems: () => {dispatch(getCartItemsTC())}
    }
}

export const CartContainer = connect(mapStateToProps , mapDispatchToProps)(CartComponent)