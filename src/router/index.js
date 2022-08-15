// // 全局路由配置
// const routes = [
//     {
//         path: '/',
//         redirect: '/index',
//     },
//     {
//         path: '/index',
//         component: () => import(/* webpackChunkName: "index" */ '@/pages/index/index'),
//         meta: {
//             title: '首页',
//             needLogin: true,
//         },
//     },
//     {
//         path: '/login',
//         component: () => import(/* webpackChunkName: "login" */ '@/pages/login/login'),
//         meta: {
//             title: '登录',
//         },
//     },
//     {
//         path: '*',
//         component: () => import(/* webpackChunkName: "404" */ '@/pages/404'),
//         meta: {
//             title: '404',
//         },
//     },
// ]
//
// /**
//  * @description: 全局路由拦截
//  * @param {string} pathname 当前路由路径
//  * @param {object} meta 当前路由自定义meta字段
//  * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
//  */
// const onRouteBefore = ({pathname, meta}) => {
//     // 动态修改页面title
//     if (meta.title !== undefined) {
//         document.title = meta.title
//     }
//     // 判断未登录跳转登录页
//     if (meta.needLogin) {
//         let isLogin = localStorage.getItem('token')
//         if (!isLogin) {
//             return '/login'
//         }
//     }
// }
//
// export {
//     routes,
//     onRouteBefore,
// }

import Index from '@/pages/index/index'
import Message from '@/pages/message/index'
import Article from '@/pages/article/index'
import Login from '@/pages/login/login'
import Page404 from '@/pages/404'

const routes = [
    {
        path: '/',
        element: <Index/>,
        meta: {
            title: '首页',
            needLogin: true,
        },
        children: [
            {
                path: '/message',
                element: <Message/>
            },
            {
                path: '/article',
                element: <Article/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>,
        meta: {
            title: '登录页',
        },
    },
    {
        path: '*',
        element: <Page404/>,
        meta: {
            title: '404'
        },
    },
]

export {
    routes
}