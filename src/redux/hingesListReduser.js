import { fireBaseAPI } from "./../API/HardwareAPI";

const SET_HINGES_LIST = "SET_HINGES_LIST";
const IS_LOADING = "HINGES_LIST_IS_LOADING";
const  SET_IN_CART = "SET_IN_CART"

let InitialState = {
	isLoading: true,
	Hinges: [],
};

export const HingesListReduser = (state = InitialState, action) => {
	switch (action.type) {
		case SET_HINGES_LIST: {
			let stateCopy = { ...state, Hinges: action.hingesList.Hinges };
			return stateCopy;
		}

		case IS_LOADING: {
			let stateCopy =  {...state , isLoading : action.isLoading}
			return stateCopy;
		}
		case SET_IN_CART : {
			let stateCopy = {...state, Hinges: [...state.Hinges]}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)] = {...state.Hinges[state.Hinges.indexOf(action.item)]}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)].cartInfo = {...state.Hinges[state.Hinges.indexOf(action.item)].cartInfo}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)].cartInfo = {...state.Hinges[state.Hinges.indexOf(action.item)].cartInfo, isInCart : action.isInCart , cartQuantity : action.quantity }
			return stateCopy
		}
		default:
			return state;
	}
};

const setHingesListAC = (hingesList) => {
	return { type: SET_HINGES_LIST, hingesList };
};

const isLoadingHingesListAC = (isLoading) => {
	return { type: IS_LOADING, isLoading };
};

const setInCart = (item , isInCart , quantity ) => { 
	return {type : SET_IN_CART , item ,isInCart , quantity}
}

export const setInCartTC = (item , isInCart , quantity) => {
	return async (dispatch, getState) => {
		let PreviosHingesArr =  getState().HingesList.Hinges
		dispatch(setInCart(item , isInCart , quantity))
		let hingesArr =  getState().HingesList.Hinges
		let hinge = hingesArr.filter( i => i.header === item.header)
		let response = await fireBaseAPI.toggleInLiked(hinge[0] , PreviosHingesArr.indexOf(item)) 
		if (response.status === 200) {
			dispatch(getHingesListTC())
		}
	}
}



export const getHingesListTC = () => {
	return async (dispatch) => {
		dispatch(isLoadingHingesListAC(true));
		let response = await fireBaseAPI.getHingesList();
		dispatch(setHingesListAC(response));
		dispatch(isLoadingHingesListAC(false));
	};
};

export const setInLikedTC = (itemInfo) => {
	return async (dispatch , getState) => {
		let hingesArr =  getState().HingesList.Hinges
		let hinge = hingesArr.filter( i => i.header === itemInfo.header)
		hinge[0].isInLiked = !hinge[0].isInLiked
		let response = await fireBaseAPI.toggleInLiked(hinge[0] , hingesArr.indexOf(itemInfo)) 
		if (response.status === 200) {
			dispatch(getHingesListTC())
		}
	}
}