
import Test from '@/router/modules/test'
// 404页面
import NotFound from '@/views/404'

export default {
    routes: [
        ...Test,
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