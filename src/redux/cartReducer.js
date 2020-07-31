import { fireBaseAPI } from "../API/HardwareAPI";
import { setInLikedTC, setQuantityAC, getHingesListTC } from "./hingesListReduser";

const InitinalState = [];
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const GET_CART_ITEMS = "GET_CART_ITEMS";
const SET_CART_QUANTITY = "SET_CART_QUANTITY";
const TOGGLE_IN_CART_LIKED_ITEM = 'TOGGLE_IN_CART_LIKED_ITEM'

export const cartReduser = (state = InitinalState, action) => {
	switch (action.type) {
		case GET_CART_ITEMS: {
			let stateCopy = [action.items];
			return stateCopy;
		}
		case ADD_TO_CART: {
			let stateCopy = [...state, action.item];
			stateCopy[stateCopy.indexOf(action.item)].cartInfo = {
				...stateCopy[stateCopy.indexOf(action.item)].cartInfo.isInCart,
				isInCart: action.isInCart,
				cartQuantity: action.quantity,
			};

			return stateCopy;
		}
		case SET_CART_QUANTITY: {
			let stateCopy = [...state];
			for (let key in stateCopy[0]) {
				if (action.item === stateCopy[0][key]) {
					stateCopy[0][key].cartInfo.cartQuantity = action.quantity;
				}
			}

			return stateCopy;
		}
		case REMOVE_FROM_CART: {
			let stateCopy = [...state];
			let itemIndex = stateCopy.findIndex(
				(item) => item.header === action.item.header
			);
			stateCopy.splice(itemIndex, 1);
			return stateCopy;
		}
		case TOGGLE_IN_CART_LIKED_ITEM : {
			let stateCopy = [...state]
			for (let key in stateCopy[0]) {
				if (action.item.header === stateCopy[0][key].header) {
					stateCopy[0][key].isInLiked = action.isInLiked ;
				}
			}
			return stateCopy
		}
		default:
			return state;
	}
};

const getCartItemsAC = (items) => {
	return { type: GET_CART_ITEMS, items };
};

const addToCartAC = (item, isInCart, quantity) => {
	return { type: ADD_TO_CART, item, isInCart, quantity };
};
export const removeFromCartAC = (item) => {
	return { type: REMOVE_FROM_CART, item };
};
export const setCartQuantityAC = (item, quantity) => {
	return { type: SET_CART_QUANTITY, item, quantity };
};

const toggleInCartLikedItem = (item , isInLiked) => {
	return { type : TOGGLE_IN_CART_LIKED_ITEM , item , isInLiked}
}


export const getCartItemsTC = () => {
	return async (dispatch) => {
		let response = await fireBaseAPI.getCartItems();
		dispatch(getCartItemsAC(response.data));
	};
};

export const addToCartTC = (item, isInCart, quantity) => {
	return async (dispatch, getState) => {
		dispatch(addToCartAC(item, isInCart, quantity));
		let response = await fireBaseAPI.addToCart(
			getState().Cart[getState().Cart.length - 1]
		);
		if (response.status === 200) {
			dispatch(getCartItemsTC());
		}
	};
};

export const setCartQuantityTC = (item, quantity) => {
	return async (dispatch, getState) => {
		dispatch(setCartQuantityAC(item, quantity));
		dispatch(setQuantityAC(item, quantity));
		let hingesArr = getState().HingesList.Hinges;
		let hinge = hingesArr.filter((i) => i.header === item.header);
		let response = await fireBaseAPI.changeHingeCartInfoQuantity(
			hinge[0],
			hingesArr.indexOf(hinge[0])
		);
		if (response.status === 200) {
			let CartArray = getState().Cart[0];
			for (let i in CartArray) {
				if (CartArray[i].header === item.header) {
					let response = await fireBaseAPI.changeCartQuantity(i ,CartArray[i] );
					if (response.status === 200) {
                        dispatch(getCartItemsTC());
                        dispatch(getHingesListTC())
					}
				}
			}
		}
	};
};

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



export const toggleInCartLikedItemTC = (itemInfo , isInLiked) => {
	return async (dispatch , getState) => {
		dispatch(toggleInCartLikedItem(itemInfo , isInLiked))
		let cartItems = getState().Cart[0]
		for (let item in cartItems) {
			if(cartItems[item].header === itemInfo.header) {
				let response = await fireBaseAPI.changeCartIsInLiked(cartItems[item] ,  item)
				if (response.status === 200) {
					dispatch(getCartItemsTC());
					dispatch(setInLikedTC(cartItems[item]))
				}
			}
		}
		
		// let filteredArr = cartItems.filter( i => i.header === item.header)
		// let response = await fireBaseAPI.toggleCartInLikedItem(filteredArr[0] ,  cartItems.indexOf(filteredArr[0]))
		// if (response.status == 200) {
		// 	getCartItemsTC()
		// }
	}
}