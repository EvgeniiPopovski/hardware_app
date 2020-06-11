import {fireBaseAPI} from './../API/HardwareAPI'

const SET_SEMI_SECTIONS = 'SET_SEMI_SECTIONS';
const IS_LOADING = 'IS_LOADING_SEMI_SECTIONS'


let InitialState = {
	isLoading: true,
	SemiSections: [
		// {
		// 	header: "Петли для душевых кабин",
		// 	src: '/images/SemiSections/showerHinges.jpg',
		// 	link: '/shower/showerHinges'
		// },
		// {
		// 	header: "Раздвижные системы на треке 30*10 мм",
		// 	src: 'images/SemiSections/showerSlidingSets.jpg',
		// 	link: '/shower/showerSlidingSets'
		// },
		// {
		// 	header: "Алюминиевый профиль для душевых",
		// 	src: '/images/SemiSections/aluminiumProfile.jpg',
		// 	link: '/shower/aluminiumProfile'
		// },
		// {
		// 	header: "Коннекторы для душевых кабин",	
		// 	src: '/images/SemiSections/showerConnectors.jpg',
		// 	link: '/shower/showerConnectors'
		// },
		// {
		// 	header: "Крепления для штанги Ф19 мм",
		// 	src: '/images/SemiSections/D19mmConnectors.jpg',
		// 	link: '/shower/D19mmConnectors'
		// },
		// {
		// 	header: "Крепления для штанги 30*10 мм",
		// 	src: '/images/SemiSections/30x10mmConnectors.jpg',
		// 	link: '/shower/30x10mmConnectors'
		// },
		// {
		// 	header: "Уплотнительный ПВХ профиль",
		// 	src: '/images/SemiSections/showerPVCSeals.jpg',
		// 	link: '/shower/showerPVCSeals'
		// },
		// {
		// 	header: "Ручки для душевых кабин",
		// 	src: '/images/SemiSections/showerHandlers.jpg',
		// 	link: '/shower/showerHandlers'
		// },
		
	]
};



const SemiSectionsReducer = (state = InitialState, action) => {
	switch (action.type) {
		case SET_SEMI_SECTIONS: {
            let stateCopy = {...state};
            stateCopy.SemiSections= action.SemiSectionsItems
			return stateCopy;
		}

		case IS_LOADING: {
			let stateCopy = {...state}
			stateCopy.isLoading = action.isLoading
            return stateCopy
		}
		default: return state
			
	}
};


//*ActionCreators

export const SemiSectionsAC = (SemiSectionsItems) => {
	return { type: SET_SEMI_SECTIONS, SemiSectionsItems };
};

export const isLoadingSemiSectionsAC = (isLoading) => {
	return { type: IS_LOADING, isLoading };
};

//*THUNK

export const SemiSectionsThunkCreator = () => {
	return async (dispatch) => {
		dispatch(isLoadingSemiSectionsAC (true))
		let response =  await fireBaseAPI.getSemiSections();
		dispatch(SemiSectionsAC(response.SemiSections));
		dispatch(isLoadingSemiSectionsAC(false))
	};
};


export default SemiSectionsReducer