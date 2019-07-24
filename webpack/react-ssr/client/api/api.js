import Axios from 'axios';
import { message } from 'antd';
import qs from 'qs';

const Ajax = Axios.create({
    timeout: 6000
});
Ajax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//添加请求拦截器
Ajax.interceptors.request.use(function (config) {
    console.log(config);
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
    get (url, params, conf = {}) {
        console.log('start');
        return new Promise((resolve, reject) => {
            Ajax.get(url, {
                params,
                conf
            }).then(res => {
                let returnCode = res.data.status.code;
                res.data.data.systemDate = res.data.systemDate;
                if (returnCode === 0) {
                    resolve(res.data.data);
                } else {
                    message.error(res.data.status.message);
                    reject(res.data.message);
                }
            }).catch((err, errType) => {
                // message.error(err.message);
                reject(err, errType);
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
                } else {
                    console.log(res, '---------------------12');
                    message.error(res.data.status.message);
                    reject(res.data.message);
                }
            }).catch((err, errType) => {
                console.log(err, '-------------------err');
                // message.error(err.message);
                reject(err, errType);
            });
        });
    }
};

export { API };
