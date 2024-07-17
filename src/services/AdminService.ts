import { code } from '../messages'
import { notifyError, notifySuccess } from './NotificationService'
import axios from 'axios';
import Cookies from 'universal-cookie';

export const addProduct = async (product:[]) => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const addprodut_url = process.env.REACT_APP_ADD_PRODUCT!

    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };

    let w_retProd = {
        title: '',
        img: '',
        detail: '',
        price: 0,
        fixedFee: 0,
        percentFee: 0,
        currency: 'eur',
        _id: '',
        api_url: '',
        api_key: '',
        exchange: false,
        product_id: '',
        card_type: '',
        iframe_id: ''
    };
    let w_ret = {status: false, prod: w_retProd};
    try {
        let w_response = await axios.post(server_url + addprodut_url, {product: product}, headers)
        if(w_response.status === 200){
            let data:any = w_response.data;

            if(data.status){
                notifySuccess(data.message)
                w_ret ={status: true, prod: data.data}
            } else {
                notifyError(data.message, data.errors)
            }       
        }
    } catch (error: any) {
        notifyError(code[5011], error)
    }
    return w_ret;
}

export const deleteProduct = async (prodId: string) => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const deleteprodut_url = process.env.REACT_APP_DELETE_PRODUCT!

    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };

    let w_ret = {status: false};
    try {
        let w_response = await axios.post(server_url + deleteprodut_url, {prodId: prodId}, headers)
        if(w_response.status === 200){
            let data:any = w_response.data;

            if(data.status){
                notifySuccess(data.message)
                w_ret ={status: true}
            } else {
                notifyError(data.message, data.errors)
            }       
        }
    } catch (error: any) {
        notifyError(code[5011], error)
    }
    return w_ret;
}

export const updateProduct = async (prod: []) => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const updateprodut_url = process.env.REACT_APP_UPDATE_PRODUCT!

    const cookies = new Cookies()
    const headers = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };

    let w_ret = {status: false};
    try {
        let w_response = await axios.post(server_url + updateprodut_url, {product: prod}, headers)
        if(w_response.status === 200){
            let data:any = w_response.data;

            if(data.status){
                notifySuccess(data.message)
                w_ret ={status: true}
            } else {
                notifyError(data.message, data.errors)
            }       
        }
    } catch (error: any) {
        notifyError(code[5011], error)
    }
    return w_ret;
}

export const getProducts = async() => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const getproducts_url = process.env.REACT_APP_GET_PRODUCTS!
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

export const imageUpload = async (data: any) => {
    const server_url = process.env.REACT_APP_SERVER_API_URL!
    const imageupload_url = process.env.REACT_APP_IMAGE_UPLOAD!

    let w_return = '';
    let url = '';

    url = server_url + imageupload_url;
    
    const cookies = new Cookies()
    const headers = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer '+ cookies.get('token')
        }
    };

    await axios.post(url, data, headers)
    .then(response => {
        if(response.status === 200){
            let data:any = response.data;

            if(data.status){
                w_return = data.data;
            } else {
                notifyError(data.message, data.error)
            }       
        }
    })
    .catch(error => {
        notifyError(code[5011], error)
    })

    return w_return;
}