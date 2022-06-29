const axios = require('axios');
// const PORT = 3001;

// const api = axios.create({
//     baseURL: `http://localhost:${PORT}`,
// });

const URL = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';

// axios.get(URL).then(resp => {

//     console.log(resp.data);
// });




export const apiGET = async (endpoint) => {
    const result = await axios.get(URL);
   return result.data.items;
};
  