import React from 'react'
import { Redirect } from "react-router";
import {connect} from 'react-redux'
import Preloader from '../../common/Preloader/Preloader';
import { createRenderer } from 'react-dom/test-utils';



let mapStateToProps = (state) => {
    return {
        HingeInfo : state.HingesList.Hinges
    }
}
export const RedirectHOC = (Component) => { 
    
    class RedirectComponent extends React.Component {
        
        componentDidUpdate (prevProps) {
            if (this.props.HingeInfo.length !== prevProps.HingeInfo.length) {
                debugger
                <Component {...this.props}/>
            }
        }
        render() {
            if (this.props.HingeInfo) {
                return <Preloader {...this.props}/>
            }
            console.log(this.props.HingeInfo)
            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps) (RedirectComponent) 
    return ConnectedRedirectComponent
}
