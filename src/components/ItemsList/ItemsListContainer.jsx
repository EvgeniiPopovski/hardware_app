
import {connect} from "react-redux"
import {ItemsList} from './ItemsList'
import { getHingesListTC } from '../../redux/hingesListReduser'
import { getCartItemsTC } from "../../redux/cartReducer"
import { setLikedItemsTC } from "../../redux/likedItemsReducer"

const mapStateToProps = (state) => {
    return {
        hingesList: state.HingesList.Hinges,
        isLoading : state.HingesList.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHingesList : () => {dispatch(getHingesListTC())},
        getCartItems: () => {dispatch(getCartItemsTC())},
        getLikedItems: () => {dispatch(setLikedItemsTC())}
    }
}


export const ItemsListContainer = connect (mapStateToProps , mapDispatchToProps) (ItemsList)