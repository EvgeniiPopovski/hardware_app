const SET_FILTER_STATE = "SET_FILTER_STATE";

const InitialState = {
	material: {
		zinkFilter: false,
		brassFilter: false,
		asi304: false,
	},
	color: {
		chrome: false,
		satin: false,
		black: false,
		bronse: false,
		gold: false,
	},
};

export const filterReduser = (state = InitialState, action) => {
	switch (action.type) {
		case SET_FILTER_STATE: {
			let stateCopy = { ...state, ...action.filterElements };
			return stateCopy;
		}

		default:
			return state;
	}
};

// export const setFilterStateAC = (itemsList) => {
// 	itemsList;
// 	return { type: SET_FILTER_STATE };
// };

// ! {
// !     "ArticleNumber" : "MF-003",
// !    "description" : {
//  !     "color" : "хром",
//  !     "material" : "латунь",
//   !!    "text" : "Подходит для стекол: 8-12мм.Нагрузка на 2 петли: 40кг. Максимальная ширина стекла 750мм",
// !      "thikness" : "8-12мм",
// !      "workload" : "40 кг"
//  !   },
// !    "header" : "Петля стекло-стекло",
// !    "photoes" : {
//  !     "Drawing" : "/images/Hinges/drawings/glass-glass_drawing.jpg",
//  !     "MainPhoto" : "/images/Hinges/glass-glass_hinge_small.jpg",
//  !     "SmallPhoto1" : null
// !    },
// !     "price" : "60"
// !  }
