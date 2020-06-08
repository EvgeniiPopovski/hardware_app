import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import HardwareSections from "./MainBlocks/HardwareSection";
import { MainBlocksThunkCreator } from "../../redux/mainBlocksReduser";
import { connect } from "react-redux";







const Main = (props) => {
	useEffect(() => {
		props.getMainBlocks()
	}, [])
	let bloks = props.MainBlocks.map((block,  i) => (
		<HardwareSections key={i} header={block.header} imgSrc={block.src} link={block.link}/>
	));

	return <div className={styles.mainContainer}>{bloks}</div>;
};





const mapStateToProps = (state) => {
	return {
		MainBlocks: state.MainBlocks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getMainBlocks: () => {dispatch(MainBlocksThunkCreator())}
	}
}


export const MainContainer =  connect( mapStateToProps, mapDispatchToProps )(Main)