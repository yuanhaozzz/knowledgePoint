import ImportComponent from '../components/common/ImportComponent'

let Login = ImportComponent(() => import('../src/login'))
import Home from '../src/home';

export default [
    {
        path: '/',
        component: Login,
        key: 'Login',
        exact: true,
    },
    {
        path: '/home',
        component: Home,
        key: 'Home',
    },

];