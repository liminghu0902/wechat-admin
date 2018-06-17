import axios from 'axios';
import Cookie from './cookie';

axios.defaults.baseURL = 'http://127.0.0.1:8088/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = Cookie.getItem('token');
axios.defaults.responseType = 'json';
axios.defaults.timeout = 5000;

export default {
    get(url, params) {
        return axios.get(url, {params: params || {}})
                    .then(res => {
                        return res;
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
    },
    post(url, data, params) {
        return axios.post(url, data, params || {})
                    .then(res => {
                        return res
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
    }
}