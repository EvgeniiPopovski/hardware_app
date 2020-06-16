import React from "react";
import styles from "./Itemdescription.module.scss";
import Preloader from '../../../common/Preloader/Preloader'


export const ItemDescription = ({HingeInfo}) => {
	if(!HingeInfo) {
		return <Preloader/>
	}
	return (
		<div className={styles.Container}>
			<div className={styles.ItemDescriptionContainer}>
				<table className={styles.DescriptionTable}>
					<thead>
						<tr>
							<td colSpan={2} className={styles.tableHeader}>
								Описание
							</td>
						</tr>
						<tr>
							<td>Цвет</td>
							<td className={styles.DescriptionTableValue}>
								{HingeInfo.description.color}
							</td>
						</tr>
						<tr>
							<td>Материал</td>
							<td className={styles.DescriptionTableValue}>
							{HingeInfo.description.material}
							</td>
						</tr>
						<tr>
							<td>Толщина стекла</td>
							<td className={styles.DescriptionTableValue}>
								{HingeInfo.description.thikness}
							</td>
						</tr>
						<tr>
							<td>Нагрузка на пару </td>
							<td className={styles.DescriptionTableValue}>
								{HingeInfo.description.workload}
							</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
};
