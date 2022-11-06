import { baseURL } from '@/config/constants';
import Axios from 'axios'

const axios = Axios.create({
  baseURL,
  headers: {}
})

export default axios