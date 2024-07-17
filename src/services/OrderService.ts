import { code } from '../messages'
import { notifyError, notifySuccess } from './NotificationService'
import axios from 'axios';
import Cookies from 'universal-cookie';

export const addOrder = async (orders: [], cost: number) => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const addorder_url = process.env.REACT_APP_ADD_ORDER!
    
    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };

    try {
        let w_response = await axios.post(server_url + addorder_url, {orders: orders, cost: cost}, headers)
        if(w_response.status === 200){
            let data:any = w_response.data;

            if(data.status){
                notifySuccess(data.message)
            } else {
                notifyError(data.message, data.errors)
            }       
        }
    } catch (error: any) {
        notifyError(code[5011], error)
    }
}

export const getOrders = async(offset: number, pagelimit:number) => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const getorders_url = process.env.REACT_APP_GET_ORDERS!
    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };
    try {
        let w_response = await axios.post(server_url + getorders_url, {offset: offset, paginationLimit: pagelimit}, headers)
        if(w_response.status === 200){
            let data:any = w_response.data;
            if(data.status){
                return {orders: data.orders, count: data.count}
            } else {
                notifyError(data.message, data.errors)
            }       
        }
    } catch(error:any) {
        notifyError(code[5011], error)
    }
    
    return {orders: [], count: 0}
}

export const getMyOrders = async(offset: number, pagelimit: number) => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const getmyorders_url = process.env.REACT_APP_GET_MYORDERS!
    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };
    try {
        let w_response = await axios.post(server_url + getmyorders_url, {offset: offset, paginationLimit: pagelimit}, headers)
        if(w_response.status === 200){
            let data:any = w_response.data;
            if(data.status){
                return {orders: data.orders, count: data.count}
            } else {
                notifyError(data.message, data.errors)
            }       
        }
    } catch(error:any) {
        notifyError(code[5011], error)
    }
    
    return {orders: [], count: 0}
}

export const getProducts = async() => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const getproducts_url = process.env.REACT_APP_GET_PRODUCTS_USER!
    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };
    try {
        let w_response = await axios.post(server_url + getproducts_url, [], headers)
        if(w_response.status === 200){
            let data:any = w_response.data;
            if(data.status){
                return data.data
            } else {
                notifyError(data.message)
            }      
        } else {
            notifyError('network error')
        }
    } catch(error:any) {
        notifyError(code[5011], error)
    }
    
    return [];
}

export const getRate = async() => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const getrate_url = process.env.REACT_APP_GET_EXCHANGE_RATE!
    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };
    try {
        let w_response = await axios.post(server_url + getrate_url, [], headers)
        if(w_response.status === 200){
            let data:any = w_response.data;
            if(data.status){
                return data.data
            } else {
                notifyError(data.message)
            }      
        } else {
            notifyError('network error')
        }
    } catch(error:any) {
        notifyError(code[5011], error)
    }
    
    return 0;
}