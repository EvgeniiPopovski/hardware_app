import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import HardwareSections from "./MainBlocks/HardwareSection";
import { MainBlocksThunkCreator } from "../../redux/mainBlocksReduser";
import { connect } from "react-redux";

import Preloader from "../../common/Preloader/Preloader";

const Main = ({ isLoading, MainBlocks, getMainBlocks }) => {
	useEffect(() => {
		getMainBlocks();
	}, []);

	let bloks = MainBlocks.map((block, i) => (
		<HardwareSections
			key={i}
			header={block.header}
			imgSrc={block.src}
			link={block.link}
		/>
	));
	return (
		<div>
			{isLoading ? <Preloader /> : <div className={styles.mainContainer}> {bloks} </div> }
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		MainBlocks: state.MainBlocks.Hardware,
		isLoading: state.MainBlocks.isLoading,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getMainBlocks: () => {
			dispatch(MainBlocksThunkCreator());
		},
	};
};
export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
