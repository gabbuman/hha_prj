import axios from 'axios';

export const getDepartments = ():any => {
    // axios.post(`http://142.58.2.141:8000/api/department` /* Use this endpoint for VM hosted app */
    axios.get(`http://127.0.0.1:8000/api/department/`) /* Use this endpoint if working locally */
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
    // axios.post(`http://142.58.2.141:8000/api/department` /* Use this endpoint for VM hosted app */
    axios.get(`http://127.0.0.1:8000/api/role/`) /* Use this endpoint if working locally */
    .then(res => {
      typeof(res.data);
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error)
    });
}