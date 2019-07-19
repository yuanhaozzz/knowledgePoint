// import ImportComponent from '../component/common/ImportComponent'
// let Home = ImportComponent(import('../src/Home'))
// let Login = ImportComponent(import('../src/Login'))
import Login from '../src/login'

async function a () {
    let val = await (() => import('../src/Home'))
    console.log(val(), '222222222222222')
}

a()

export default [
    {
        path: '/',
        component: Login,
        exact: true,
        key: 'login',
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