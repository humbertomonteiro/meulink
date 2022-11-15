import axios from 'axios'

export const key = '32e3fd89c9d5508ea926a981a8130ff429935226'

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api