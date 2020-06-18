import React from 'react'
import {  withRouter } from "react-router";
import {connect} from 'react-redux'
import Preloader from '../../common/Preloader/Preloader';




let mapStateToProps = (state) => {
    return {
        HingeInfo : state.HingesList.Hinges
    }
}
export const PreloaderHOC = (Component) => { 
    
    class RedirectComponent extends React.Component {
        filter() {
                const filteredItem =  this.props.HingeInfo.filter( (hinge) => hinge.ArticleNumber === this.props.match.params.article )
            return filteredItem[0]
        }
        render() {
            if (this.props.HingeInfo.length) {
                return <Component {...this.filter()}/>
            }
            
            return <Preloader/>
        }
    }

    let ConnectedRedirectComponent = withRouter( connect(mapStateToProps) (RedirectComponent) )
    return ConnectedRedirectComponent
}

