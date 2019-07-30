import importComponent from '@/components/common/importComponent'
// import Home from '@/views/home'
// import Login from '@/views/login'

let Home = importComponent(() => import('@/views/home'))
let Login = importComponent(() => import('@/views/login'))


export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/login',
        component: Login
    }
]