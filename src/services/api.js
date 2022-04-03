import axios from 'axios'

const api = axios.create({
  baseURL:
    'https://www.zipwise.com/webservices/distance.php?key=bmqsyswxxgdmwfv4&zip1=/'
})

export default api
