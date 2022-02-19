import React from 'react';
import  http from '../services/http.service'


export async function getComments(){
    try {
        const response = await http.get(`/comments`);
        return  {

                    data: response.data ,
                    total: response.headers['x-total-count']
                }
    }catch(e){
        return e
    }
}

export default getComments;
