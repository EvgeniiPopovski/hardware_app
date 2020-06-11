import { fireBaseAPI } from "./../API/HardwareAPI";

const SET_MAIN_BLOCKS = "SET_MAIN_BLOCKS";
const IS_LOADING = "IS_LOADING";

let InitialState = {
	isLoading: true ,
	Hardware :[
	// 	{
	// 		header: "Фурнитура для душевых кабин",
	// 		link: "/shower",
	// 		src: "/images/HardwareBlock/ShowerHardware.jpg",
	// 	},
	// 	{
	// 		header: "Фурнитура для стеклянных конструкций",
	// 		link: "/constructions",
	// 		src: "/images/HardwareBlock/GlassConstructures.jpg",
	// 	},
	// 	{
	// 		header: "Фурнитура для зеркал",
	// 		link: "/mirrors",
	// 		src: "/images/HardwareBlock/MirrorHardware.jpg",
	// 	},
	// 	{
	// 		header: "Фурнитура для стеклянной мебели",
	// 		link: "/glassFurniture",
	// 		src: "/images/HardwareBlock/GlassFurnitureHardware.jpg",
	// 	},
	],
};

export const MainBlocksReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_MAIN_BLOCKS: {
            let stateCopy = {...state};
            stateCopy.Hardware= action.mainBlocksArray
			return stateCopy;
		}

		case IS_LOADING: {
			let stateCopy = {...state}
			stateCopy.isLoading = action.isLoading
            return stateCopy
		}

		default:
			return state;
	}
};

//*ActionCreators

export const MainBlocksAC = (mainBlocksArray) => {
	return { type: SET_MAIN_BLOCKS, mainBlocksArray };
};

export const isLoadingAC = (isLoading) => {
	return { type: IS_LOADING, isLoading };
};

//*THUNK

export const MainBlocksThunkCreator = () => {
	return async (dispatch) => {
		dispatch(isLoadingAC (true))
		let response =  await fireBaseAPI.getCategories();
		dispatch(MainBlocksAC(response));
		dispatch(isLoadingAC(false))
	};
};
