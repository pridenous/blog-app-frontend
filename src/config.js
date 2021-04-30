function getUrl(){
    let hostName = window.location.hostname

    if (hostName == '127.0.0.1') {
        return 'http://127.0.0.1:8000/api/'
    }
    return 'http://127.0.0.1:8000/api/'
}

const  API_URL = getUrl()

export default {
    POSTS_URL : API_URL + 'posts'
}