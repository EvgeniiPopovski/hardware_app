import React from "react";
import styles from "./Main.module.scss";
import HardwareSections from "./MainBlocks/HardwareSection";
import {fireBase} from './../../API/HardwareAPI'

let HardwareSectionInfo = [
	{
		header: "Фурнитура для душевых кабин",
		src: "/images/HardwareBlock/ShowerHardware.jpg",
		link: '/showerHardware'
	},
	{
		header: "Фурнитура для стеклянных конструкций",
		src: "/images/HardwareBlock/GlassConstructures.jpg",
		link: '/constructionsHardware'
	},
	{
		header: " Фурнитура для зеркал",
		src: "/images/HardwareBlock/MirrorHardware.jpg",
		link: '/mirrorHardware'
	},
	{
		header: "Фурнитура для стеклянной мебели",
		src: "/images/HardwareBlock/GlassFurnitureHardware.jpg",
		link: '/glassFurnitureHardware'
	},
];

fireBase.getCategories()

let bloks = HardwareSectionInfo.map((section,  i) => (
	<HardwareSections key={i} header={section.header} imgSrc={section.src} link={section.link}/>
));

export const Main = () => {
	return <div className={styles.mainContainer}>{bloks}</div>;
};
