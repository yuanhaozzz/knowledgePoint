// qa
import qaHome from '../../../views/live/qa/home'
import qaSearch from '../../../views/live/qa/search'
import qaDetail from '../../../views/live/qa/detail'


export default [
    {
        path: '/live/qa/home',
        component: qaHome,
        meta: {
            title: '用户帮助中心'
        },
        loadData: qaHome.getInintalProps
    },
    {
        path: '/live/qa/search',
        component: qaSearch,
        meta: {
            title: '用户帮助中心'
        }
    },
    {
        path: '/live/qa/detail',
        component: qaDetail,
        meta: {
            title: '帮助'
        }
    }
]