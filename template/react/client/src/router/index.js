
import Live from './modules/live'

// 404页面
import NotFound from '../views/404'
export default {
    routes: [
        ...Live,
        /**
         * 404页面 需放在底部
         */
        {
            path: '/notfound',
            component: NotFound,
            meta: {
                title: '不存在'
            }
        }
    ]
}