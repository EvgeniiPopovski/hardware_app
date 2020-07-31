import { connect } from "react-redux"
import { Auth } from "./Auth"

import { setAuthLoginAC, setAuthPassAC } from '../../redux/authReducer'

const mapStateToProps = (state) => { 
    return {
        email : state.AuthReduser.email,
        password : state.AuthReduser.password
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthLogin : (email) => dispatch(setAuthLoginAC(email)),
        setAuthPass : (pass) => dispatch(setAuthPassAC(pass))
    }
}

export const AuthContainer = connect (mapStateToProps , mapDispatchToProps) (Auth)