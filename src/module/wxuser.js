export default class WX_User {
    
    constructor(data = {}) {
        this.openid = data.openid;
        this.groupid = data.groupid;
        this.nickname = data.nickname;
        this.sex = data.sex;
        this.country = data.country;
        this.province = data.province;
        this.city = data.city;
        this.subscribe = data.subscribe;
        this.subscribeTime = data.subscribe_time;
        this.subscribeScene = data.subscribe_scene;
        this.tagidList = data.tagid_list;
        this.avator = data.headimgurl;
        this.language = data.language;
        this.remark = data.remark;
    }

    //判断用户是否关注
    isSubscribe() {
        return !!this.subscribe;
    }

    //获取用户性别
    getSex() {
        return this.sex === 1 ? "男性" : this.sex === 2 ? "女性" : "未知";
    }

    //获取用户关注来源
    getSubscribeScene() {
        switch(this.subscribeScene) {
            case 'ADD_SCENE_SEARCH':
                return '公众号搜索';
                break;
            case 'ADD_SCENE_ACCOUNT_MIGRATION':
                return '公众号迁移';
                break;
            case 'ADD_SCENE_PROFILE_CARD ':
                return '名片分享';
                break;
            case 'ADD_SCENE_QR_CODE':
                return '扫描二维码';
                break;
            case 'ADD_SCENEPROFILE':
                return 'LINK 图文页内名称点击';
                break;
            case 'ADD_SCENE_PROFILE_ITEM ':
                return '图文页右上角菜单';
                break;
            case 'ADD_SCENE_PAID':
                return '支付后关注';
                break;
            case 'ADD_SCENE_OTHERS':
                return '其他';
                break;
            default:
                return '未知';
                break;
        }
    }

}