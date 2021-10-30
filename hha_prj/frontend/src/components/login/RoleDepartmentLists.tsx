import axios from 'axios';
import { endpoint } from './Endpoint'

export const getDepartments = ():any => {
    axios.get(endpoint + 'api/department/')
    .then(res => {
      typeof(res.data);
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error)
    });
}

export const getRoles = ():any => {
    axios.get(endpoint + 'api/role/') 
    .then(res => {
      typeof(res.data);
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error)
    });
}