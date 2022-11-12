import { makeAutoObservable } from 'mobx'
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import User from '../models/User';
import { sendPrivateRequest } from '../utils/request';

export default class CurrentUserStore{

    user = {}
    auth = false;

    constructor(){
        makeAutoObservable(this)        
    }

    setAuth(auth){
        this.auth = auth;
    }

    setUser(user){
        this.user = user;
    }

    async login(username, password){
        try{
            const response = await AuthService.login(username,password);
            this.setAuth(true)
            this.setUser(new User(response.data['id'], 
                                        response.data['first_name'],
                                        response.data['last_name'],
                                        response.data['username'],
                                        response.data['email']))
        }
        catch (error){
            if(error.response.status == 500)
                alert('Server is not available')
            return error.response?.data;
        }
    }

    async register(firstName, lastName, username,email, password){
        try{
            const response = await AuthService.register(firstName, lastName, username,email, password);
            this.setAuth(true)
            this.setUser(new User(response.data['id'], 
                                        response.data['first_name'],
                                        response.data['last_name'],
                                        response.data['username'],
                                        response.data['email']))
        }
        catch (error){
            if(error.response.status == 500)
                alert('Server is unavailable')
            return error.response?.data;
        }
    }

    async logout(){
        return await sendPrivateRequest(async () => {
            const response = await AuthService.logout();
            this.setAuth(false)
            this.setUser({})
        })
    }

    async get(){
        return await sendPrivateRequest(async()=> {
            const response = await UserService.getCurrentUser();

            this.setAuth(true);
            this.setUser(new User(response.data['id'], 
                                        response.data['first_name'],
                                        response.data['last_name'],
                                        response.data['username'],
                                        response.data['email']))
            }
        )
    }

    
    
}