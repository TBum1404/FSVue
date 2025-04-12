import axios from 'axios'
import router from './router.js'
//es gibt zwei möglichkeiten der Authentifizierung, einmal tokenbased und einmal cookie based.
// token braucht interceptor,
// das andere nur credentials id xsrftoken

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    withXSRFToken: true
})

// //tokenbased auth: interceptors neccesary
// axiosClient.interceptors.request.use( config => {
//     config.headers.Authorization =`Bearer ${localStorage.getItem('token')}` //" ` " is used for template literals not " ' "
// })


axiosClient.interceptors.response.use((response) => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {//sehr wichtig denn wenn es den code 401 gibt, dann wird man direkt zum Loginfenster weitergeleitet
        router.push({name: 'Login'});
    }

    throw error;
})

export default axiosClient