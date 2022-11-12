import axios from "axios";


export default class UserService {

    static async getCurrentUser(){
        return await axios.get(`/api/users/current`);
    }


    static async getUser(id){
        return await axios.get(`/api/users/${id}`);
    }

        

}