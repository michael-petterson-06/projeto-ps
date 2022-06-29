const axios = require('axios');
const URL = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';


export const apiGET = async (endpoint) => {
    const result = await axios.get(URL);
   return result.data.items;
};
  