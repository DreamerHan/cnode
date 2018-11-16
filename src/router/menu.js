let menu = [{ //主页
        path: '/',
        name: 'Home',
        component: () =>
            import ('@/views/home/index')
    },
    { //新手入门
        path: 'getstart',
        name: 'GetStart',
        component: () =>
            import ('@/views/getStart/index')
    },
    { //api
        path: 'api',
        name: 'Api',
        component: () =>
            import ('@/views/apiPage/index')
    },
    { ///关于
        path: 'about',
        name: 'About',
        component: () =>
            import ('@/views/about/index')
    },
    { //注册
        path: 'register',
        name: 'Register',
        component: () =>
            import ('@/views/register/index')
    },
    { //登陆
        path: 'login',
        name: 'Login',
        component: () =>
            import ('@/views/login/index')
    }
]

export default menu;