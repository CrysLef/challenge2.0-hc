import axios from 'axios'

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/CrysLef/challenge2.0-hc'
})

export default api