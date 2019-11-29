import { API } from './api';

export class ApiEnvironment {
    constructor(opstion) {
        let { API, host } = opstion
        this.host = host
        this.environment = 'master'
        this.API = API
        console.log(API, '----------------------------------------------------')
        this.LIVE_API = ''
        this.BASE_API = ''
        this.getEnvironment()
        this.setApiEnvironment()

    }

    /**
     * 根据环境设置接口
     */
    setApiEnvironment () {
        switch (this.environment) {
            case 'rc':
                this.LIVE_API = 'https://preonline.beiwaiguoji.com/api/live/dispatch';
                this.BASE_API = 'https://preonline.beiwaiguoji.com/api/base/dispatch';
                break;
            default:
                this.LIVE_API = 'https://api.beiwaiguoji.com/api/live/dispatch';
                this.BASE_API = 'https://api.beiwaiguoji.com/api/base/dispatch';
                break;
        }
    }

    /**
     * 判断当前环境
     */
    getEnvironment () {
        if (global.window) {
            this.host = location.hostname
        }
        switch (this.host) {
            case 'localhost':
                this.environment = 'rc'
                break;
            case '172.17.70.101':
                this.environment = 'rc'
                break;
            case 'preonlineh5.beiwaiguoji.com':
                this.environment = 'rc'
                break;
            case 'h5.beiwaiguoji.com':
                this.environment = 'master'
                break;
            default:
                this.environment = 'master'
                break;
        }
    }

    /**
     * @param {*} params 请求参数 
     */
    async sendLiveApi (params) {
        return await this.API.post(this.LIVE_API, params, {});
    }

    /**
     * @param {*} params 请求参数 
     */
    async sendBaseApi (params) {
        console.log(this.API, '-----------=')
        return await this.API.post(this.BASE_API, params, {});
    }

}

let api = new ApiEnvironment({ API })

export default api
