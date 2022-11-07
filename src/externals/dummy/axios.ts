import Axios from 'axios'

const axios = Axios.create({
  baseURL: "https://httpbin.org/",
  headers: {}
})

export default axios