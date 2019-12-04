
import Live from './modules/live'

export const BASE_PATH = '/ipad'


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