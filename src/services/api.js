import axios from 'axios'

const api = axios.create({
    baseURL: "https://todos-backend-mobile.herokuapp.com/"
})

export default api