export async function editData({id ,data}) {
    try {
        const response = await http.put(`/products${id}`,data)
        return  response.data
    }catch(e){
        return e
    }
}