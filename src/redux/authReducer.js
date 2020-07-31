const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD'

const InitialState = {
    email : '',
    password : '',


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

export {
    AuthReduser,
    setAuthLoginAC ,
    setAuthPassAC
}

