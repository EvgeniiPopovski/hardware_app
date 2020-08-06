import { authAPI } from "../API/authAPI";

const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD'
const SET_USER_ID = 'SET_USER_ID'

const InitialState = {
    email : '',
    password : '',
    userId: '',


}

const AuthReduser = (state = InitialState, action) => {
    switch (action.type) {
        case SET_LOGIN:{
            let stateCopy = {...state , email : action.email}
            return stateCopy;
        }
        case SET_PASSWORD:{
            let stateCopy = {...state , password : action.pass}
            return stateCopy
        }
        case SET_USER_ID:{
            let stateCopy = {...state , userId : action.userId}
            return stateCopy
        }    
        default:
            return state;
    }
}

const setAuthLoginAC = (email) => {
    return {type : SET_LOGIN , email}
}
const setAuthPassAC = (pass) => {
    return {type : SET_PASSWORD , pass}
}
const setUserId = (userId) => {
    return {type: SET_USER_ID , userId}
}

export const doRegistrationTC = (email, password) => {
    return async (dispatch) => {
        let response = await authAPI.setUser(email, password) 
        if (response.status === 200) {
            dispatch(setUserId(response.data.localId))
        }
    }
}
// ! сетаем профиль  Пользователя в массив пользователей в firebase  исходи из полученных данных их Компонента UserInfo

// export const setUserProfile = () => {
//     return await (dispatch) => { 

//     }
// } 

export {
    AuthReduser,
    setAuthLoginAC ,
    setAuthPassAC
}

