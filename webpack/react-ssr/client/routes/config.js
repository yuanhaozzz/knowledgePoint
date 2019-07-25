// import ImportComponent from '../component/common/ImportComponent'
// let HomeDynmic = ImportComponent(import('../src/Home'))
// let LoginDynmic = ImportComponent(import('../src/Login'))

import Login from '../src/broadcast/login';
import Course from '../src/broadcast/course';

// async function a () {
//     debugger
//     let val = await (import('../src/Home'))
//     console.log(val(), '222222222222222')
// }

// a()

// 按需引入问题？？？

// export let clientRoute = [
//     {
//         path: '/',
//         component: HomeDynmic,
//         exact: true,
//         key: 'Home',
//         // loadData: Home.getInintalProps
//     },
//     {
//         path: '/login',
//         component: LoginDynmic,
//         key: 'login',
//         exact: true,
//         // loadData: Login.getInintalProps
//     }
// ]

export default [
    {
        path: '/h5/live',
        component: Login,
        exact: true,
        key: 'Home',
    },
    {
        path: '/h5/live/broadcast/login',
        component: Login,
        key: 'login',
        exact: true,
        // loadData: Login.getInintalProps
    },
    {
        path: '/h5/live/broadcast/course',
        // path: '/',
        component: Course,
        key: 'course',
        exact: true,
        loadData: Course.getInintalProps
    }
];