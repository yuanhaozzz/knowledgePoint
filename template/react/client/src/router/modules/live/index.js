
import qaHome from '../../../views/live/qa/home'


export default [
    {
        path: '/live/qa/home',
        component: qaHome,
        meta: {
            title: '首页'
        },
        exact: true,
        loadData: qaHome.getInintalProps
    }
]