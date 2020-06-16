import React, { useEffect } from 'react'
import styles from './ItemPage.module.scss'
import { ItemPhoto } from './ItemPhoto/ItemPhoto'
import { ItemDescription } from './ItemDescription/ItemDescription'
import { ItemOrder } from './ItemOrder/ItemOrder'
import { connect } from 'react-redux'
import { getHingesListTC } from '../../redux/hingesListReduser'




const ItemPage =   ({hingesList, ...props}) => {
    
    useEffect(() => {
        props.getHingesList();
    }, [])

    const filteredItem = hingesList.filter( (hinge) => hinge.ArticleNumber === props.match.params.article )
    console.log(filteredItem[0])

    
    return(
        <div className={styles.Container}>
            <ItemPhoto HingeInfo={filteredItem[0]}/>
            <ItemOrder HingeInfo={filteredItem[0]}/>
            <ItemDescription HingeInfo={filteredItem[0]}/>
        </div>
    )
}



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


export const ItemPageContainer = connect(mapStateToProps , mapDispatchToProps) (ItemPage)