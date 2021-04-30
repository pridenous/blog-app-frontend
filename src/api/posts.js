// import config from "../config"
import Vue from 'vue';
import axios from "axios"

Vue.use(axios)
// import axios from 'axios'

const api  = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
// export default {
//     name: "PostService",
    
//     getPosts(){
//         let url =  config.POSTS_URL
//         return axios.get(url)
//         .then((response)=>Promise.resolve(response.data)) 
//         .catch((error)=>Promise.reject(error))
//     }
// }