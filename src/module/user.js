import api from '@/api';
import { request, Cookie } from '@/util';

export default {
    login(data) {
        return request.post(api.admin.user.login, data)
        .then(res => {
            if(res.data.success) {
                Cookie.setItem('token', res.data.token);
                return res;
            } else {
                return Promise.reject({
                    success: false,
                    msg: res.data.stateDesc
                });
            }
        }, err => {
            return Promise.reject({
                success: false,
                msg: err.msg || '服务器连接失败!'
            });
        })
    }
} 