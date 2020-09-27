import axios from 'axios';

const axiosPizzas = axios.create({
    baseURL: 'https://pizza-app-3c225.firebaseio.com/',
});

export default axiosPizzas;