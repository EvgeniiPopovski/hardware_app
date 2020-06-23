const ADD_TO_LIKED = 'ADD_TO_LIKED'
const REMOVE_FROM_LIKED = 'REMOVE_FROM_LIKE'

const InitialState = [];

export const likedItemsReducer = (state = InitialState , action) => {
    switch (action.type) {
        case ADD_TO_LIKED: {
            let stateCopy  = [...state , action.item];
            stateCopy[stateCopy.indexOf(action.item)] = {...stateCopy[stateCopy.indexOf(action.item)], isInLiked : action.isInLiked}
            return stateCopy
        }
        case REMOVE_FROM_LIKED: {
            let stateCopy = [...state];
            let itemIndex = stateCopy.findIndex((item =>item.header === action.item.header))
            stateCopy.splice(itemIndex,1)
            return stateCopy
        }
    
        default:
            return state;
    }
} 

export const addToLikedAC = (item , isInLiked) => {
    return {type : ADD_TO_LIKED , item , isInLiked }
}

export const removeFromLikedAC = (item) => {
    return { type : REMOVE_FROM_LIKED , item}
}