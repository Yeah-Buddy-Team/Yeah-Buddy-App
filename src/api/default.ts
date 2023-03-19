import Axios from 'axios';
import Config from 'react-native-config';

export const axios = Axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axios;
