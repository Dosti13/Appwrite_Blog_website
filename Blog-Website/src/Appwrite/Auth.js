import config from "../config/config";
import {Client ,Account,ID} from 'appwrite'

export class AuthService  {
    Client = new Client();
    account;
    constructor (){
        this.Client
        .setEndpoint(config.VITE_APPWRITE_URL)
        .setProject(config.VITE_PROJECT_ID);
        this.account = new Account(this.Client);

    }
    async createAccount  ({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                this.login(email,password)
            }
            else{
                return userAccount

            }
        } catch (error) {
            throw error
        }
    }
        async login ({email,password}){
            try {
                return await this.account.createEmailPasswordSession(email,password)
                
            } catch (error) {
                throw error
            }


        }
        async getCurrentUser(){
            try {
                // Attempt to get the current user, only if there's an active session
                const user = await this.account.get();
                return user; // Return the user if found
              } catch (error) {
                if (error.code === 401) {
                  console.warn("No active session found. User must log in.");
                  return null; // Return null if no user is found
                }
                console.error("Error in get user:", error);
                throw error;
              }
            }

        
    async logout(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            throw error 
        }
    }

}

const authService = new AuthService();

export default authService