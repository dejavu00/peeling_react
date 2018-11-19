var express=require('express');
var app =express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "access-token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var menuList = {"success":true,"msg":"success","total":2,"rows":[{"id":"6","name":"自动拨号系统","parentId":"0","description":null,"hasChildren":true,"children":[{"id":"288","name":"字段管理","parentId":"6","description":" 是否发顺丰斯蒂芬森分萨芬是发是否是","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/field/index","parameter":"","visible":"1","sortWeight":"1","type":"0","check":false,"parentName":"自动拨号系统","url":"/alm/field/index?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=288","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/field/index","text":"字段管理"},{"id":"10","name":"文件管理","parentId":"6","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/fileshow/list","parameter":"","visible":"1","sortWeight":"2","type":"0","check":false,"parentName":"自动拨号系统","url":"/alm/fileshow/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=10","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/fileshow/list","text":"文件管理"},{"id":"8","name":"名单筛选","parentId":"6","description":null,"hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/filter/info/list","parameter":null,"visible":"1","sortWeight":"3","type":"0","check":false,"parentName":"自动拨号系统","url":"/alm/filter/info/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=8","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/filter/info/list","text":"名单筛选"},{"id":"1","name":"活动管理","parentId":"6","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/campaign/list","parameter":"","visible":"1","sortWeight":"4","type":"0","check":false,"parentName":"自动拨号系统","url":"/alm/campaign/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=1","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/campaign/list","text":"活动管理"},{"id":"9","name":"日程管理","parentId":"6","description":null,"hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/schedule/list","parameter":null,"visible":"1","sortWeight":"5","type":"0","check":false,"parentName":"自动拨号系统","url":"/alm/schedule/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=9","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/schedule/list","text":"日程管理"},{"id":"15","name":"拨打进程监控","parentId":"6","description":null,"hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/report/entCallingProgressList","parameter":null,"visible":"1","sortWeight":"6","type":"0","check":false,"parentName":"自动拨号系统","url":"/alm/report/entCallingProgressList?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=15","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/report/entCallingProgressList","text":"拨打进程监控"},{"id":"12","name":"拨打情况统计","parentId":"6","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/report/dailyCallingSituationList","parameter":"","visible":"1","sortWeight":"7","type":"0","check":false,"parentName":"自动拨号系统","url":"/alm/report/dailyCallingSituationList?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=12","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/report/dailyCallingSituationList","text":"拨打情况统计"}],"state":"open","platformId":"portal","rootUrl":"/alm","actionUrl":"","parameter":null,"visible":"1","sortWeight":"1","type":"0","check":false,"parentName":null,"url":"","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm","text":"自动拨号系统"},{"id":"2","name":"系统配置","parentId":"0","description":null,"hasChildren":true,"children":[{"id":"5","name":"角色管理","parentId":"2","description":null,"hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/role/list","parameter":null,"visible":"1","sortWeight":"1","type":"0","check":false,"parentName":"系统配置","url":"/alm/role/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=5","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/role/list","text":"角色管理"},{"id":"3","name":"用户管理","parentId":"2","description":null,"hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/user/list","parameter":null,"visible":"1","sortWeight":"2","type":"0","check":false,"parentName":"系统配置","url":"/alm/user/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=3","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/user/list","text":"用户管理"},{"id":"4","name":"权限管理","parentId":"2","description":null,"hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/permission/list","parameter":null,"visible":"1","sortWeight":"3","type":"0","check":false,"parentName":"系统配置","url":"/alm/permission/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=4","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/permission/list","text":"权限管理"},{"id":"282","name":"企业管理","parentId":"2","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/ent/list","parameter":"","visible":"1","sortWeight":"4","type":"0","check":false,"parentName":"系统配置","url":"/alm/ent/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=282","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/ent/list","text":"企业管理"},{"id":"283","name":"配置管理","parentId":"2","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/platformConfig/list","parameter":"","visible":"1","sortWeight":"5","type":"0","check":false,"parentName":"系统配置","url":"/alm/platformConfig/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=283","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/platformConfig/list","text":"配置管理"},{"id":"284","name":"平台管理","parentId":"2","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/platform/list","parameter":"","visible":"1","sortWeight":"6","type":"0","check":false,"parentName":"系统配置","url":"/alm/platform/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=284","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/platform/list","text":"平台管理"},{"id":"285","name":"实例管理","parentId":"2","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/platformInstance/list","parameter":"","visible":"1","sortWeight":"7","type":"0","check":false,"parentName":"系统配置","url":"/alm/platformInstance/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=285","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/platformInstance/list","text":"实例管理"},{"id":"286","name":"接口管理","parentId":"2","description":"","hasChildren":false,"children":[],"state":null,"platformId":"portal","rootUrl":"/alm","actionUrl":"/probeApi/list","parameter":"","visible":"1","sortWeight":"8","type":"0","check":false,"parentName":"系统配置","url":"/alm/probeApi/list?sessionKey=b20fc908cb215398d6d018da973038fa&PERMISSIONID=286","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm/probeApi/list","text":"接口管理"}],"state":"open","platformId":"portal","rootUrl":"/alm","actionUrl":"","parameter":null,"visible":"1","sortWeight":"2","type":"0","check":false,"parentName":null,"url":"","typeStr":"菜单","visibleStr":"可见","permissionUrl":"/alm","text":"系统配置"}],"message":"success"};
var useList ={"success":true,"total":2,"rows":[{
    departmentId: null,
    departmentName: null,
    domainCode: null,
    domainName: null,
    email: "",
    entId: "qnsoft",
    id: "2",
    lastIp: "0:0:0:0:0:0:0:1",
    lastLoginTime: "2018-10-25 15:46:57.0",
    loginName: "zhouzk",
    name: "zhouzk",
    operationCount: "0",
    operationCountInt: 0,
    password: "e10adc3949ba59abbe56e057f20f883e",
    passwordDate: 1538981915000,
    roleId: "1",
    roleName: "超级管理员",
    status: "1",
    statusStr: "正常",
    telphone: "",
    unitId: null,
    unitName: null,
    userType: null,
    userTypeStr: "未知",
},{
    departmentId: "NULL",
    departmentName: "NULL",
    domainCode: "0",
    domainName: "全国",
    email: "chenglt@channelsoft.com",
    entId: "qnsoft",
    id: "1",
    lastIp: "0:0:0:0:0:0:0:1",
    lastLoginTime: "2018-11-13 14:16:42.0",
    loginName: "root",
    name: "超级管理员",
    operationCount: "0",
    operationCountInt: 0,
    password: "6684d40d03f2777a08e818e59e98619b",
    passwordDate: 1538287066000,
    roleId: "1",
    roleName: "超级管理员",
    status: "1",
    statusStr: "正常",
    telphone: "18180875223",
    unitId: null,
    unitName: null,
    userType: "1",
    userTypeStr: "运营商",
}]};
const expireTime = 1000*60;
app.get('/login/ajax',function (req,res) {
    res.header('Access-Control-Expose-Headers', 'access-token');
    res.header('access-token', (new Date()).getTime());
    res.json({
        success:true,
        msg:'登录成功!'
    });
});

//查询菜单列表
app.get('/permission/queryMenuTree',function(req,res){
    res.status(200);
    res.json(menuList)
});

//查询菜单列表
app.get('/user/query',function(req,res){
    const token = req.headers['access-token'];
    const now = (new Date()).getTime();
    res.status(200);
    if(now - token > expireTime){
        res.header('access-token', now);
        //过期了
        res.json({
            success:false,
            msg:'过期了，请重新登录'
        })
    }else{
        res.json(useList)
    }

});

//配置服务端口

var server = app.listen(5000, function () {
    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://', host, port);
})
