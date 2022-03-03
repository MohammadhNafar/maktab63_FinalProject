
import  http from '../services/http.service'



// export async function getOrders(){
//     try {
//         const response = await http.get(`/orders`);
//         return  {

//                     data: response.data ,
//                     total: response.headers['x-total-count']
//                 }
//     }catch(e){
//         return e
//     }
// }
// export default getOrders;


export async function getOrders(config){
    try {
        const response = await http.get("/orders",config);
        return response;
    } catch(e){
        return Promise.reject(e);
    }




}