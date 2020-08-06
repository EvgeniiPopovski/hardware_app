import { connect } from "react-redux"
import { Auth } from "./Auth"

import { setAuthLoginAC, setAuthPassAC, doRegistrationTC } from '../../redux/authReducer'

const mapStateToProps = (state) => { 
    return {
        email : state.AuthReduser.email,
        password : state.AuthReduser.password,
        userId : state.AuthReduser.userId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthLogin : (email) => dispatch(setAuthLoginAC(email)),
        setAuthPass : (pass) => dispatch(setAuthPassAC(pass)),
        doRegistration : (email, password) => dispatch(doRegistrationTC(email,password)),
    }
}

export const AuthContainer = connect (mapStateToProps , mapDispatchToProps) (Auth)