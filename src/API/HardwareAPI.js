import axios from 'axios'

const Project_ID = 'hardwareapp-5fb7d'

const instance = axios.create({
    
    baseURL: `https://${Project_ID}.firebaseio.com`,
    
});

export  const fireBaseAPI = {
    async getCategories () {
        let response = await instance.get(`https://${Project_ID}.firebaseio.com/Hardware.json`);
        return response.data
    } 
} 