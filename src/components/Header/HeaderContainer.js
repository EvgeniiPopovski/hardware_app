import { connect } from "react-redux"
import { Header } from "./Header"

const mapStateToProps = (state) => {
    return {
        cartItemList : state.Cart[0]
    }
}

const mapDispatchToProps = () => {
    return {

    }
}

export const HeaderContainer = connect(mapStateToProps , mapDispatchToProps) (Header)