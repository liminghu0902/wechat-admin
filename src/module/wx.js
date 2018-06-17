import api from '@/api';
import { request, Cookie } from '@/util';
import { WX_User } from '@/module';

export default {
    getUsers(data = {}) {
        const query = {
            page: data.page || 1,
            count: data.count || 10
        };
        return request.get(api.wx.user.getUsers + `?page=${query.page}&count=${query.count}`)
        .then(res => {
            return {
                success: true,
                data: res.data.data.user_info_list.map(user => new WX_User(user))
            };
        }, err => {
            console.log(err);
        })
    }
}