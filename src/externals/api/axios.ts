import { APIbaseURL } from '@/config/constants';
import Axios from 'axios'

const axios = Axios.create({
  baseURL: APIbaseURL,
  headers: {}
})

export default axios