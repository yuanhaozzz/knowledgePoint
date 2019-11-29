import Axios from 'axios';
import qs from 'qs';

const Ajax = Axios.create({
    timeout: 6000
});
Ajax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//添加请求拦截器
Ajax.interceptors.request.use(function (config) {
    // post数据序列化  针对post需要
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    loadinginstace.close();
    return Promise.reject(error);
});

const API = {
    get (url, params, conf = {}, type = 'live') {
        return new Promise((resolve, reject) => {
            Ajax.get(url, {
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
    },
    post (url, params, conf = {}) {
        return new Promise((resolve, reject) => {
            Ajax.post(url, params, conf).then((res) => {
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
};

export { API };
