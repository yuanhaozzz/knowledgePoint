import Home from '../src/home'
import Login from '../src/login'

console.log(Home)

export default [
    {
        path: '/',
        component: Home,
        exact: true,
        key: 'home',
        loadData: Home.getInintalProps
    },
    {
        path: '/login',
        component: Login,
        key: 'login',
        exact: true,
        loadData: Login.getInintalProps
    }
]