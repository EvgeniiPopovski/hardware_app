import { fireBaseAPI } from "./../API/HardwareAPI";

const SET_HINGES_LIST = "SET_HINGES_LIST";
const IS_LOADING = "HINGES_LIST_IS_LOADING";
let InitialState = {
	isLoading: true,
	Hinges: [
		//     {
		//         header: 'Петля стекло-стекло',
		//         ArticleNumber: 'MF-003',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/glass-glass_hinge_small.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'brass',
		//             color: 'chrome'
		//         },
		//         price: '60'
		//     },
		//     {
		//         header: 'Петля стена-стекло со смещением',
		//         ArticleNumber: 'MF-001А',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/wall-to-glass-3-points.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'brass',
		//             color: 'chrome'
		//         },
		//         price: '40'
		//     },
		//     {
		//         header: 'Петля стекло-стекло на угол 90 град.',
		//         ArticleNumber: 'MF-004',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/glass-to-glass-90deg.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'brass',
		//             color: 'chrome'
		//         },
		//         price: '70'
		//     },
		//     {
		//         header: 'Петля стекло-стекло',
		//         ArticleNumber: 'MF-001',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/wall-to-glass-4points.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'brass',
		//             color: 'chrome'
		//         },
		//         price: '40'
		//     },
		//     {
		//         header: 'Петля стекло-стекло на угол 135град.',
		//         ArticleNumber: 'MF-002',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/glass-to-glass-135deg.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'brass',
		//             color: 'chrome'
		//         },
		//         price: '60'
		//     },
		//     {
		//         header: 'Петля стекло-стекло (цинковый сплав)',
		//         ArticleNumber: 'MF-003 zn',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/glass-glass_hinge_small.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'zink',
		//             color: 'chrome'
		//         },
		//         price: '35'
		//     },
		//     {
		//         header: 'Петля стена-стекло со смещением (цинковый сплав)',
		//         ArticleNumber: 'MF-001А zn',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/wall-to-glass-3-points.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'zink',
		//             color: 'chrome'
		//         },
		//         price: '25'
		//     },
		//     {
		//         header: 'Петля стекло-стекло на угол 90 град. (цинковый сплав)',
		//         ArticleNumber: 'MF-004 zn',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/glass-to-glass-90deg.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'zink',
		//             color: 'chrome'
		//         },
		//         price: '35'
		//     },
		//     {
		//         header: 'Петля стекло-стекло (цинковый сплав)',
		//         ArticleNumber: 'MF-001 zn',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/wall-to-glass-4points.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'zink',
		//             color: 'chrome'
		//         },
		//         price: '25'
		//     },
		//     {
		//         header: 'Петля стекло-стекло на угол 135град. (цинковый сплав)',
		//         ArticleNumber: 'MF-002 zn',
		//         photoes: {
		//             MainPhoto: './../../common/img/hinges/glass-to-glass-135deg.jpg',
		//             SmallPhoto1: ' Nety poka',
		//             Drawing: 'not fouund'
		//         },
		//         description: {
		//             material: 'zink',
		//             color: 'chrome'
		//         },
		//         price: '35'
		//     }
	],
};

export const HingesListReduser = (state = InitialState, action) => {
	switch (action.type) {
		case SET_HINGES_LIST: {
			let stateCopy = { ...state, Hinges: action.hingesList.Hinges };
			return stateCopy;
		}

		case IS_LOADING: {
			let stateCopy = { ...state };
			stateCopy.isLoading = action.isLoading;
			return stateCopy;
		}
		default:
			return state;
	}
};

const setHingesListAC = (hingesList) => {
	return { type: SET_HINGES_LIST, hingesList };
};

const isLoadingHingesListAC = (isLoading) => {
	return { type: IS_LOADING, isLoading };
};

export const getHingesListTC = () => {
	return async (dispatch) => {
		dispatch(isLoadingHingesListAC(true));
		let response = await fireBaseAPI.getHingesList();
		dispatch(setHingesListAC(response));
		dispatch(isLoadingHingesListAC(false));
	};
};
