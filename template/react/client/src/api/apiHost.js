import Axios from 'axios';
import qs from 'qs';

class CreateApi {
    constructor() {
        this.axios = Axios.create({
            timeout: 6000
        });
        this.setInit()
    }

    /**
     * 初始化axios
     */
    setInit() {
        this.axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        //添加请求拦截器
        this.axios.interceptors.request.use(function (config) {
            // post数据序列化  针对post需要
            if (config.method === 'post') {
                config.data = qs.stringify(config.data);
            }
            return config;
        }, function (error) {
            loadinginstace.close();
            return Promise.reject(error);
        });
    }

    /**
     * 
     * @param {*} url      地址
     * @param {*} params   接口参数
     * @param {*} conf     axios配置
     * @param {*} type     区分接口
     */
    get (url, params, conf = {}, type = 'live') {
        return new Promise((resolve, reject) => {
            this.axios.get(url, {
                params,
                conf
            }).then(res => {
                let returnCode = type === 'live' ? res.data.status.code : res.data.code;
                if (type === 'task') {
                    if (returnCode === 200) {
                        resolve(res.data);
                    } else {
                        reject(res);
                    }
                } else {
                    res.data.data.systemDate = res.data.systemDate;
                    if (returnCode === 0) {
                        resolve(res.data.data);
                    } else if (returnCode === 200) {
                        resolve(res.data);
                    } else if (global.window) {
                        reject(res.data.message);
                    } else {
                        console.log(res.data.status.message);
                    }
                }
            }).catch(() => {
                // message.error(err.message);
                reject();
            });
        });
    }
    post (url, params, conf = {}) {
        return new Promise((resolve, reject) => {
            this.axios.post(url, params, conf).then((res) => {
                let returnCode = res.data.status.code;
                res.data.data.systemDate = res.data.systemDate;
                if (returnCode === 0) {
                    resolve(res.data.data);
                } else if (global.window) {

                    reject(res.data.message);
                } else {
                    console.log(res.data.status.message);
                }
            }).catch(() => {
                reject();
            });
        });
    }
}

export class ApiEnvironment extends CreateApi {
    constructor(opstion = {}) {
        // 子类没有this对象  继承父类
        super()
        let {  host } = opstion
        this.host = host
        this.environment = 'master'
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
        return await this.post(this.LIVE_API, params, {});
    }

    /**
     * @param {*} params 请求参数 
     */
    async sendBaseApi (params) {
        return await this.post(this.BASE_API, params, {});
    }

}

let api = new ApiEnvironment()

export default api
