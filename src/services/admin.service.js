import axios from "axios";
import authHeader from './auth-header';
//import settingCredentialsConfig from './settings';
import AuthService from "../services/auth.service";


const API_URL = "http://localhost:5000/api/admin/";

export const settingCredentialsConfig = {
    withCredentials:true, 
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
        'Access-Control-Allow-Credentials': 'true'
    }
}

class AdminService {

    addservice(name, description, price) {
        settingCredentialsConfig.headers.Authorization = "Bearer " + AuthService.getCurrentUser().access_token
        
        return axios.post(API_URL + "addservice", {
          name,
          description,
          price
        }, authHeader()
        )
        .then((response) => {
          return response.data;
        });
    }
    addproduct(name, description, quantity, price) {
        return axios
        .post(API_URL + "addproduct", {
            headers: authHeader(),
          name,
          description,
          quantity,
          price
        })
        .then((response) => {
          return response.data;
        });
    }
    delproduct(name) {
        return axios
        .post(API_URL + "delproduct", {
            headers: authHeader(),
          name
        })
        .then((response) => {
          return response.data;
        });
    }
    addrole(username, role) {
        return axios
        .post(API_URL + "addrole", {
            headers: authHeader(),
            username,
            role

        })
        .then((response) => {
          return response.data;
        });
    }
}
export default new AdminService();