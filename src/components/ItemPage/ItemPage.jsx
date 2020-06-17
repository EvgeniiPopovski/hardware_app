import React, { useEffect } from 'react'
import styles from './ItemPage.module.scss'
import  ItemPhoto  from './ItemPhoto/ItemPhoto'
import { ItemDescription } from './ItemDescription/ItemDescription'
import { ItemOrderMemo } from './ItemOrder/ItemOrder'
import { connect } from 'react-redux'
import { getHingesListTC } from '../../redux/hingesListReduser'




const  ItemPageMemo = React.memo( function ItemPage ({hingesList, ...props})  {
    
    useEffect(() => {
        props.getHingesList();
    }, [])

    const filteredItem = hingesList.filter( (hinge) => hinge.ArticleNumber === props.match.params.article )
    

    
    return(
        <div className={styles.Container}>
            <ItemPhoto HingeInfo={filteredItem[0]}/>
            <ItemOrderMemo HingeInfo={filteredItem[0]}/>
            <ItemDescription HingeInfo={filteredItem[0]}/>
        </div>
    )
})



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


export const ItemPageContainer = connect(mapStateToProps , mapDispatchToProps) (ItemPageMemo)