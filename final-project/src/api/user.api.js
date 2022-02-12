import  http from '../services/http.service'
//import axios from 'axios';
//import BASE_URL from 'http://localhost:3002';

export async function getOrders(){
    try {
        const response = await http.get(`/category`);
        return  {

                    data: response.data ,
                    total: response.headers['x-total-count']
                }
    }catch(e){
        return e
    }
}
export default getOrders;