import { connect } from 'react-redux';
import ShowerHardware from './ShowerHardware';
import {SemiSectionsThunkCreator} from './../../../redux/semiSectionsreducer'

const mapStateToProps = (state) => {
    return {
        SemiSections : state.SemiSections.SemiSections,
        isLoading: state.SemiSections.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSemiSections: () => {dispatch(SemiSectionsThunkCreator())}
    }
}

const ShowerHardwareContainer = connect(mapStateToProps , mapDispatchToProps) (ShowerHardware) 
export default ShowerHardwareContainer;