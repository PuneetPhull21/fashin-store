import http from './http';
import axios from 'axios';
export const userServices ={
    login,

}

function login (data){
    return http.post("/users/login",data);
}