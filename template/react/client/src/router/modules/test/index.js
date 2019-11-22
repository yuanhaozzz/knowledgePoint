
import Home from '@/views/home'
import Test from '@/views/test'


export default [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        },
        exact: true
    },

    {
        path: '/test',
        component: Test,
        meta: {
            title: '测试'
        }
    }
]