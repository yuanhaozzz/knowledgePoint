
import Home from '@/views/home'
import Test from '@/views/test'


export default [
    {
        path: '/',
        component: Home,
        meta: {
            title: '首asd页'
        },
        exact: true,
        loadData: Home.getInintalProps
    },

    {
        path: '/test',
        component: Test,
        meta: {
            title: '测试'
        }
    }
]