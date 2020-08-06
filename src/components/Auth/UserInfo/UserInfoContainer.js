import { connect } from "react-redux"

import { UserInfo } from "./UserInfo"

const mapStateToProps = (state) => { 
    return {
        userId : state.AuthReduser.userId,
    }
}


export const UserProfileContainer = connect (mapStateToProps , {}) (UserInfo)