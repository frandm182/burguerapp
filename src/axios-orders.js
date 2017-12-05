import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerapp-9bf7a.firebaseio.com/'
});

export default instance;
