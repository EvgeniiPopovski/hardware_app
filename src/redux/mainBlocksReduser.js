import { fireBaseAPI } from './../API/HardwareAPI';


const SET_MAIN_BLOCKS = 'SET_MAIN_BLOCKS'

let InitialState = [];


export const MainBlocksReducer = (state = InitialState , action) => {
    switch (action.type) { 
    case (SET_MAIN_BLOCKS) :
        let stateCopy = action.mainBlocksArray
        return stateCopy;
    
    default: return state;
    }
}


//*ActionCreators


const MainBlocksAC = (mainBlocksArray) => {
    return { type : SET_MAIN_BLOCKS , mainBlocksArray }
};

//*THUNK

export const MainBlocksThunkCreator =  () => {
    return  async (dispatch) => {
        let response = await fireBaseAPI.getCategories()
        console.log(response)
        dispatch(MainBlocksAC(response))
    }
}



