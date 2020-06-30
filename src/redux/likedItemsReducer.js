import { fireBaseAPI } from "../API/HardwareAPI";

const SET_LIKED_ITEMS = "SET_LIKED_ITEMS";


const InitialState = [];

export const likedItemsReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_LIKED_ITEMS: {
			let stateCopy = [action.items];
			return stateCopy;
		}
		default:
			return state;
	}
};

// ! экшн для получения с сервера значений понравивцшихся товаров и записи их в массив  , принимает массив товаров
const setLikedItemsAC = (items) => {
	return { type: SET_LIKED_ITEMS, items };
};

// ! санка для получения данных с сервера и записи в масиив
export const setLikedItemsTC = () => {
	return async (dispatch) => {
		let response = await fireBaseAPI.getLikedList();
		if (response.status === 200) {
			dispatch(setLikedItemsAC(response.data));
		}
	};
};
// ! санка для добаления данных на сервер
export const addToLikedTC = (item) => {
	item.isInLiked = !item.isInLiked;
	return async (dispatch) => {
		let response = await fireBaseAPI.addToLiked(item);
		if (response.status === 200) {
			dispatch(setLikedItemsTC());
		}
	};
	// return response
};
// ! санка для удления  данных с сервера

export const removeTC = (item) => {
	return async (dispatch, getState) => {
		let likedArray = getState().LikedItems[0];
		for (let i in likedArray) {
			if (likedArray[i].header === item.header) {
				let response = await fireBaseAPI.removeFromLiked(i);
				if (response.status === 200) {
					dispatch(setLikedItemsTC());
				}
			}
		}
	};
};
