// import ImportComponent from '../component/common/ImportComponent'
// let HomeDynmic = ImportComponent(import('../src/Home'))
// let LoginDynmic = ImportComponent(import('../src/Login'))

import Login from '../src/broadcast/login';
import Course from '../src/broadcast/course';
import Evaluation from '../src/broadcast/evaluation';

export default [
    {
        path: '/h5/live/broadcast/Evaluation',
        // path: '/',
        component: Evaluation,
        key: 'evaluation',
        exact: true,
    },
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