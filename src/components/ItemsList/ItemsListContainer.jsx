
import {connect} from "react-redux"
import {ItemsList} from './ItemsList'
import { getHingesListTC } from '../../redux/hingesListReduser'

const mapStateToProps = (state) => {
    return {
        hingesList: state.HingesList.Hinges,
        isLoading : state.HingesList.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHingesList : () => {dispatch(getHingesListTC())}
    }
}


export const ItemsListContainer = connect (mapStateToProps , mapDispatchToProps) (ItemsList)