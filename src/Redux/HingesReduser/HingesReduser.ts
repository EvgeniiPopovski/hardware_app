// Example of Hinge object
// {
//   "ArticleNumber" : "MF-003",
//   "id" : "Hinge_ID"
//   "description" : {
//     "color" : "хром",
//     "material" : "латунь",
//     "text" : "Подходит для стекол: 8-12мм.Нагрузка на 2 петли: 40кг. Максимальная ширина стекла 750мм",
//     "thikness" : "8-12мм",
//     "workload" : "40 кг"
//   }

const GET_HINGES: "GET_HINGES" = "GET_HINGES";

const initialState = {};

type descriptionHingeType = {
	color: string;
	material: string;
	text: string;
	thikness: string;
	workload: string;
};

type hingeType = {
	articleNumber: string;
	id: string;
	description?: descriptionHingeType;
};

const Hinge: hingeType = {
	articleNumber: "123",
	id: "123",
};

console.log(typeof Hinge);

const HingesReduser = (
	state: { o: hingeType } | typeof initialState = initialState,
	action: any
) => {
	switch (action.type) {
		case GET_HINGES: {
			return { ...state, ...action.payload.hinges };
		}
		default:
			return state;
	}
};

const getHingesAC = (hinges) => {
	return {
		type: GET_HINGES,
		payload: {
			hinges,
		},
	};
};

export { HingesReduser };
