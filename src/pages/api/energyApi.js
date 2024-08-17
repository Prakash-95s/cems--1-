
import axios from 'axios';
//fetching energy data by id
export const getEnergyById  =   async(id) =>{
try{
    const response = await axios.get(`http://localhost:8080/api/energy/${id}`)
    return response.data
}catch(srror){
    console.error('Error fetching energy details:', error);
    return null
}
}