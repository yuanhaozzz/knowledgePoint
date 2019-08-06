// import importComponent from '@/components/common/importComponent';
// import Home from '@/views/home'
// import Login from '@/views/login'
import React from 'react';

let Home = React.lazy(() => import('@/views/home'));
let Login = React.lazy(() => import('@/views/login'));
let Context = React.lazy(() => import('@/components/common/context'));
let Refs = React.lazy(() => import('@/components/common/ref'));


export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/context',
        component: Context
    },
    {
        path: '/refs',
        component: Refs
    }
];