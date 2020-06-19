

const SET_FILTER_STATE = "SET_FILTER_STATE";
const SET_MATERIAL = "SET_MATERIAL";

const InitialState = {
	material: {
		zink: false,
		brass: false,
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
			let stateCopy = { ...state, material: { ...action.material } , color : {...action.color} };
			return stateCopy;
		}
		case SET_MATERIAL : {
			console.log(Object.keys(action.materialItem)[0])
			let stateCopy = {...state}
			stateCopy.material[Object.keys(action.materialItem).toString()] = action.materialItem[Object.keys(action.materialItem)[0]]
			return stateCopy
		}
		default:
			return state;
	}
};

export const setFilterStateAC = (itemsList) => {
	let MaterialsArr = itemsList.map((item) => item.description.material);
	let materialsFilterd = [];
	for (let str of MaterialsArr) {
		if (!materialsFilterd.includes(str)) {
			materialsFilterd.push(str);
		}
	}
	let action = { type: SET_FILTER_STATE, material: {} , color : {} };

	for (let material of materialsFilterd) {
		switch (material) {
			case "латунь":
				action.material.brass = false;
				break;
			case "цинковый сплав":
				action.material.zink = false;
				break;
			case "нержавеющая сталь":
				action.material.asi304 = false;
				break;
			default:
				return action;
		}
	}

	let ColorsArr = itemsList.map((item) => item.description.color);
	let colorFiltered = [];
	for (let str of ColorsArr) {
		if (!colorFiltered.includes(str)) {
			colorFiltered.push(str);
		}
	}
	for (let color of colorFiltered) {
		switch (color) {
			case "хром":
				action.color.chrome = false;
				break;
			case "матовая":
				action.color.satin = false;
				break;
			case "черный":
				action.color.black = false;
				break;
			case "бронза":
				action.color.bronse = false;
				break;
			case "золото":
				action.color.gold = false;
				break;	
			default:
				return action;
		}
	}

	return action;
};


export const setMaterial = (materialItem) => {
	return { type : SET_MATERIAL , materialItem}
}
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
