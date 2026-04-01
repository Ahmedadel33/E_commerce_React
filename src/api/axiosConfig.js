import axios from 'axios';


 const API = axios.create({
    baseURL : "http://localhost:5000/api/"
})
API.interceptors.request.use(request => {
    let token = localStorage.getItem('token');

    if (token) {
        token = token.replace(/"/g, '');

        request.headers.Authorization = `Bearer ${token}`;
    }

    console.log(request.headers.Authorization);
    return request;
});
export default API; 

