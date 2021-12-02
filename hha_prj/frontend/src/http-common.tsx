import axios from "axios";
import { endpoint } from './components/Endpoint';

export default axios.create({
  baseURL: endpoint + "api",
  headers: {
    "Content-type": "application/json"
  }
});