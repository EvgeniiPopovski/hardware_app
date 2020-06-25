import axios from 'axios'

const Project_ID = 'hardwareapp-5fb7d'

const instance = axios.create({
    
    baseURL: `https://${Project_ID}.firebaseio.com`,
    
});

export  const fireBaseAPI = {
    async getCategories () {
        let response = await instance.get(`/Hardware.json`);
        return response.data
    },
    async getSemiSections () {
        let response = await instance.get(`/SemiSections.json`);
        return response.data
    },
    async getHingesList () {
        let response = await instance.get(`/HingesList.json`);
        return response.data
    },
    async getLikedList () {
        let response = await instance.get(`/LikedItems.json`)
        return response
    },
    async addToLiked (item) {
        let response = await instance.post('/LikedItems/.json' , JSON.stringify(item))
        return response 
    },
    async removeFromLiked (item) {  
        let response  = await instance.delete()
        console.log(response)
        return response
    }
}





