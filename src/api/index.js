export default {
    admin: {
        user: {
            login: '/login'    //登陆
        }
    },
    wx: {
        getAccessToken:                 '/token?grant_type=client_credential',      //获取access_token
        menu: {
            createMenus:                '/menu/create',                             //创建自定义菜单
            deleteMenus:                '/menu/delete',                             //删除所有菜单
            getMenus:                   '/menu/get',                                //获取所有菜单
            createConditionalMenus:     '/menu/addconditional',                     //创建个性化菜单
            deleteConditionalMenus:     '/menu/delconditional',                     //删除个性化菜单
        },  
        material: {
            addTemporaryMaterial:       '/media/upload',                            //新增临时素材
            getTemporaryMaterial:       '/media/get',                               //获取临时素材
            addNewsMaterial:            '/media/add_news',                          //新增永久图文素材
            uploadNewsImage:            '/media/uploadimg',                         //上传图文消息内的图片获取URL
            addMaterial:                '/material/add_material',                   //上传除图文外的其他永久素材
            getMaterial:                '/material/get_material',                   //获取永久素材
            deleteMaterial:             '/material/del_material',                   //删除永久素材
            updateNewsMaterial:         '/material/update_news',                    //修改永久图文素材
            getMaterialCount:           '/material/get_materialcount',              //获取永久素材总数
            getMaterialList:            '/material/batchget_material',              //获取永久素材列表
        },
        user: {
            createTag:                  '/tags/create',                             //创建标签
            getTags:                    '/tags/get',                                //获取标签
            updateTag:                  '/tags/update',                             //编辑标签
            deleteTag:                  '/tags/delete',                             //删除标签
            getUserBytag:               '/user/tag/get',                            //获取标签下的用户列表
            playTagWithUser:            '/tags/members/batchtagging',               //批量为用户打标签
            delTagWithUser:             '/tags/members/batchuntagging',             //批量为用户取消标签
            getTagWithUser:             '/tags/getidlist',                          //获取用户身上的标签列表
            setUserRemark:              '/user/info/updateremark',                  //设置用户备注名
            getUsers:                   '/wx/user/get',                             //获取用户信息列表
            getBlackUsers:              '/tags/members/getblacklist',               //获取公众号的黑名单列表
            setBlackUsers:              '/tags/members/batchblacklist',             //拉黑用户
            delBlackUsers:              '/tags/members/batchunblacklist',           //取消拉黑用户
        }
    }
}