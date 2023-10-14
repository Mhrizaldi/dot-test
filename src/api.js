import axios from 'axios';

const API_KEY = '58dc7ec5f6d5f2d565c500758551a2d2';

const instance = axios.create({
  baseURL: 'https://api.rajaongkir.com/starter/province',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default instance;
