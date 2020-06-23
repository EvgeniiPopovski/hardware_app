
const InitinalState = [];
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const cartReduser = (state =InitinalState , action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            let stateCopy = [...state , action.item]
            stateCopy[stateCopy.indexOf(action.item)].cartInfo = {...stateCopy[stateCopy.indexOf(action.item)].cartInfo.isInCart, isInCart: action.isInCart , cartQuantity : action.quantity}
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

export const addToCartAC = (item , isInCart , quantity) => {
    return {type : ADD_TO_CART , item ,isInCart , quantity}
}
export const removeFromCartAC = (item) => {
    return {type : REMOVE_FROM_CART, item}
}