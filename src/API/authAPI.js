import axios from "axios";

const Project_ID = "hardwareapp-5fb7d";

// const instance = axios.create({

//     baseURL: `https://${Project_ID}.firebaseio.com`,

// });

export const authAPI = {
	async setUser(email, pass) {
		let response = await axios.post(
			"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAltd4n7g7pxCovTkmQPUvJ-0lZkJAKE_s",
			{ email: email, password: pass, returnSecureToken: true }
		);
		return response
	},
};
