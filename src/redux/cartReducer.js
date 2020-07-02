import { fireBaseAPI } from "../API/HardwareAPI";
import { setInCartTC } from "./hingesListReduser";

const InitinalState = [];
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const SET_CART_QUANTITY = 'SET_CART_QUANTITY'

export const cartReduser = (state =InitinalState , action) => {
    switch (action.type) {
        case GET_CART_ITEMS: {
            let stateCopy = [action.items]
            return stateCopy
        }
        case ADD_TO_CART:{
            let stateCopy = [...state , action.item]
            stateCopy[stateCopy.indexOf(action.item)].cartInfo = {...state[state.indexOf(action.item)].cartInfo.isInCart, isInCart: action.isInCart , cartQuantity : action.quantity}
            return stateCopy
        }
        case SET_CART_QUANTITY: {
            let stateCopy = [...state]
            console.log(state)
            console.log(state[state.indexOf(action.item)]  ,  state.indexOf(action.item))
            // stateCopy[stateCopy.indexOf(action.item)].cartInfo = {...state[state.indexOf(action.item)].cartInfo.isInCart, isInCart: action.isInCart , cartQuantity : action.quantity}
            return stateCopy
        }
        case REMOVE_FROM_CART : {
            let stateCopy = [...state];
            let itemIndex = stateCopy.findIndex((item =>item.header === action.item.header))
            stateCopy.splice(itemIndex,1)
            return stateCopy
        }
        default:
            return state;
    }
}

const getCartItemsAC = (items) =>{
    return {type : GET_CART_ITEMS , items  }
}

const addToCartAC = (item , isInCart , quantity) => {
    return {type : ADD_TO_CART , item ,isInCart , quantity}
}
export const removeFromCartAC = (item) => {
    return {type : REMOVE_FROM_CART, item}
}
export const setCartQuantityAC = (item , quantity) => {
    return {type: SET_CART_QUANTITY , item , quantity}
}

export const getCartItemsTC = () => {
    return async (dispatch) => {
        let response = await fireBaseAPI.getCartItems ()
        dispatch(getCartItemsAC(response.data))
    }
}


export const addToCartTC = (item , isInCart , quantity) => {
    return async (dispatch , getState) => {
        dispatch(addToCartAC(item , isInCart , quantity))
        let response = await fireBaseAPI.addToCart(getState().Cart[getState().Cart.length-1]) 
        if (response.status === 200) {
            dispatch(getCartItemsTC())
        }
    }
}

export const setCartQuantityTC = (item , quantity) => {
    return async (dispatch , getState) => {
        dispatch(setCartQuantityAC(item , quantity))
        dispatch(setInCartTC(item , true ,quantity))
        // let response 
    }
}


export const removeFromCartTC = (item) => {
	return async (dispatch, getState) => {
		let CartArray = getState().Cart[0];
		for (let i in CartArray) {
			if (CartArray[i].header === item.header) {
				let response = await fireBaseAPI.removeFromCart(i);
				if (response.status === 200) {
					dispatch(getCartItemsTC());
				}
			}
		}
	};
};