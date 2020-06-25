import { fireBaseAPI } from "../API/HardwareAPI";

const SET_LIKED_ITEMS = "SET_LIKED_ITEMS";
const ADD_TO_LIKED = "ADD_TO_LIKED";
const REMOVE_FROM_LIKED = "REMOVE_FROM_LIKE";

const InitialState = [];

export const likedItemsReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_LIKED_ITEMS: {
            let stateCopy = [...state];
            for (let item in action.Items) {
            let arr = stateCopy.filter( (i) => i.header == action.Items[item].header )
            if (arr.length < 1 || arr.lenght ==0 ){
                stateCopy.push(action.Items[item])
                console.log('push')
            }
            }
			return stateCopy;
		}

		case ADD_TO_LIKED: {
            let stateCopy = [...state];
            let arr = stateCopy.filter( (i) => i.header == action.item.header )
            if (arr.length < 1 || arr.lenght ==0 ) {
                console.log(arr.length)
                stateCopy.push(action.item)
            }
			stateCopy[stateCopy.indexOf(action.item)] = {
				...stateCopy[stateCopy.indexOf(action.item)],
				isInLiked: action.isInLiked,
            };
            console.log(stateCopy)
			return stateCopy;
		}
		case REMOVE_FROM_LIKED: {
			let stateCopy = [...state];
			let itemIndex = stateCopy.findIndex(
				(item) => item.header === action.item.header
			);
			stateCopy.splice(itemIndex, 1);
			return stateCopy;
		}

		default:
			return state;
	}
};

const setLikedItemsAC = (Items) => {
    
	return { type: SET_LIKED_ITEMS, Items };
};

const addToLikedAC = (item, isInLiked) => {
	return { type: ADD_TO_LIKED, item, isInLiked };
};

const removeFromLikedAC = (item) => {
	return { type: REMOVE_FROM_LIKED, item };
};

export const setLikedItemsTC = () => {
	return async (dispatch) => {
		let response = await fireBaseAPI.getLikedList();
		if (response.status === 200) {
			dispatch(setLikedItemsAC(response.data));
		} else {
			dispatch(setLikedItemsAC([]));
		}
	};
};

export const addToLikedTC = (itemInfo, isInLiked) => {
	return async (dispatch, getState) => {
		dispatch(addToLikedAC(itemInfo, isInLiked));
        let item = getState().LikedItems.filter((i) => itemInfo.header === i.header);
        if (item.length === 1) {
        let response = await fireBaseAPI.addToLiked(item[0]);
		if (response.status == 200) {
			setLikedItemsTC();
        }
    }
	};
	// return response
};

// export const removeFromLikedTC = (item) => {
// 	return async (dispatch) => {
// 		dispatch(removeFromLikedAC(item));
// 		let response = await fireBaseAPI.removeFromLiked();
// 		return response;
// 	};
// };
