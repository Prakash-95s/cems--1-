import axios from 'axios';
//Fetching cities data
export const getCities = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/cities');
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};
