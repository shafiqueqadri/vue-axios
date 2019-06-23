import axios from 'axios'
import { API } from '../environment';

export const get = (url) => axios.get(`${API}/${url}`);