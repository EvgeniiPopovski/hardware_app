
const InitinalState = [];
const ADD_TO_CART = 'ADD_TO_CART';

export const cartReduser = (state =InitinalState , action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            let stateCopy = [...state , action.item]
            return stateCopy
        }
        default:
            return state;
    }
}

export const addToCartAC = (item) => {
    return {type : ADD_TO_CART , item}
}
