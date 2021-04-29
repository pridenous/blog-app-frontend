import config from "../config"
import Vue from 'vue';
import axios from "axios"

Vue.use(axios)

export default {
    name: "PostService",
    
    getPosts(){
        let url =  config.POSTS_URL
        return axios.get(url)
        .then((response)=>Promise.resolve(response.data)) 
        .catch((error)=>Promise.reject(error))
    }
}