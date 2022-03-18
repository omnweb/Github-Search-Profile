import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://api.github.com'
})

export default api;

const users = await api.get('users/omnweb').then(
    response => response.json());

console.log(users);
