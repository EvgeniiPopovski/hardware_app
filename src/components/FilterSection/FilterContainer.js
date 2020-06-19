import { connect } from "react-redux"
import Filter from "./Filter"
import { setMaterial } from "../../redux/filterReduser"


const mapStateToProps = (state) => {
    return {
        material : state.Filter.material,
        color: state.Filter.color
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMaterial: (materialItem) => (dispatch(setMaterial(materialItem)))
    }
}

export const FilterContainer = connect (mapStateToProps , mapDispatchToProps) (Filter) 