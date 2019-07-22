// import ImportComponent from '../component/common/ImportComponent'
// let HomeDynmic = ImportComponent(import('../src/Home'))
// let LoginDynmic = ImportComponent(import('../src/Login'))

import Login from '../src/login'
import Home from '../src/Home'

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
        path: '/',
        component: Home,
        exact: true,
        key: 'Home',
        // loadData: Home.getInintalProps
    },
    {
        path: '/login',
        component: Login,
        key: 'login',
        exact: true,
        // loadData: Login.getInintalProps
    }
]