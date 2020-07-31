
import {connect} from "react-redux"
import {ItemsList} from './ItemsList'
import { getHingesListTC, setInLikedTC } from '../../redux/hingesListReduser'
import { getCartItemsTC, toggleInCartLikedItemTC} from "../../redux/cartReducer"
import { setLikedItemsTC, addToLikedTC, removeTC } from "../../redux/likedItemsReducer"

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
        getLikedItems: () => {dispatch(setLikedItemsTC())},

        setInLiked : (item) => {dispatch(setInLikedTC(item))},
        addToLiked : (item) => {dispatch(addToLikedTC(item))},
        removeFromLiked : (item) => {dispatch(removeTC(item))},

        toggleInCartLikedItem: (item , isInLiked) => {dispatch(toggleInCartLikedItemTC( item , isInLiked ))}
    } 
}


export const ItemsListContainer = connect (mapStateToProps , mapDispatchToProps) (ItemsList)