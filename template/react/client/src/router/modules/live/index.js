// qa
import qaHome from '../../../views/live/qa/home'
import qaSearch from '../../../views/live/qa/search'
import qaDetail from '../../../views/live/qa/detail'

import { BASE_PATH } from '../../index'

export default [
    {
        path: BASE_PATH + '/live/qa/home',
        component: qaHome,
        meta: {
            title: '用户帮助中心'
        },
        loadData: qaHome.getInintalProps
    },
    {
        path: BASE_PATH + '/live/qa/search',
        component: qaSearch,
        meta: {
            title: '用户帮助中心'
        }
    },
    {
        path: BASE_PATH + '/live/qa/detail',
        component: qaDetail,
        meta: {
            title: '帮助'
        }
    }
]