import { fireBaseAPI } from "./../API/HardwareAPI";


const SET_HINGES_LIST = "SET_HINGES_LIST";
const IS_LOADING = "HINGES_LIST_IS_LOADING";
const ADD_TO_LIKED ="ADD_TO_LIKED";
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
			let stateCopy = { ...state };
			stateCopy.isLoading = action.isLoading;
			return stateCopy;
		}
		case SET_IN_CART : {
			let stateCopy = {...state, Hinges: [...state.Hinges]}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)] = {...state.Hinges[state.Hinges.indexOf(action.item)]}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)].cartInfo = {...state.Hinges[state.Hinges.indexOf(action.item)].cartInfo}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)].cartInfo = {...state.Hinges[state.Hinges.indexOf(action.item)].cartInfo, isInCart : action.isInCart , cartQuantity : action.quantity }
			return stateCopy
		}
		case ADD_TO_LIKED : {
			let stateCopy = {...state, Hinges: [...state.Hinges]}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)] = {...state.Hinges[state.Hinges.indexOf(action.item)]}
			stateCopy.Hinges[state.Hinges.indexOf(action.item)] = {...state.Hinges[state.Hinges.indexOf(action.item)] , isInLiked : !state.Hinges[state.Hinges.indexOf(action.item)].isInLiked}
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

export const setInCart = (item , isInCart , quantity ) => { 
	return {type : SET_IN_CART , item ,isInCart , quantity}
}
export const addToLikedAC = (item) => {
	return {type : ADD_TO_LIKED , item}
}



export const getHingesListTC = () => {
	return async (dispatch) => {
		dispatch(isLoadingHingesListAC(true));
		let response = await fireBaseAPI.getHingesList();
		dispatch(setHingesListAC(response));
		dispatch(isLoadingHingesListAC(false));
	};
};
