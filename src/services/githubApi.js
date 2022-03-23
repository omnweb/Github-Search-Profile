import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/'        
})

export default api;

// const users = await api.get('users/omnweb').then(
//     response => JSON.stringify(response.data));

// console.log(users);
