import axios from "axios";


export default class AuthService {
    
    static async login(username, password) {

        return await axios.post('/api/login', {username, password});
    }

    static async register(firstName, lastName, username, email, password) {

        return await axios.post('/api/register', {'first_name': firstName, 
                                                    'last_name': lastName, 
                                                    username, email, password});
    }

    static async refresh(){

        return await axios.get('/api/refresh');
    }

    static async logout(){
        return await axios.get('/api/logout');
    }

}