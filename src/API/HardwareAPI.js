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
    async toggleInLiked (item , itemIndex) {
        let response = await instance.patch(`/HingesList/Hinges/${itemIndex}.json` , JSON.stringify(item))
        return response
    },
    async getLikedList () {
        let response = await instance.get(`/LikedItems.json`)
        return response
    },
    async addToLiked (item) {
        let response = await instance.post('/LikedItems/.json' , JSON.stringify(item))
        return response 
    },
    async removeFromLiked (itemCode) {  
        let response  = await instance.delete(`/LikedItems/${itemCode}.json`)
        return response
    },
    async getCartItems () {
        let response = await instance.get(`/ItemsCart.json`)
        return response
    },
    async addToCart (item) {
        let response = await instance.post (`/ItemsCart.json` , JSON.stringify(item))
        return response
    },
    async removeFromCart (itemCode) {
        let response = await instance.delete(`/ItemsCart/${itemCode}.json`)
        return response
    },
    async changeHingeCartInfoQuantity (item , itemIndex) {
        let response = await instance.patch(`/HingesList/Hinges/${itemIndex}.json` , JSON.stringify(item))
        return response
    },
    async changeCartQuantity (itemCode , itemInfo) {
        let response = await instance.patch(`/ItemsCart/${itemCode}.json` , JSON.stringify(itemInfo))
        return response
    }, 
    async changeCartIsInLiked (item , itemCode) {
        let response = await instance.patch(`/ItemsCart/${itemCode}.json` , JSON.stringify(item))
        return response
    }
}





