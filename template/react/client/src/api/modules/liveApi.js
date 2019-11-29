import { API } from '../api';
import { livePath, basePath } from '../apiHost'
export default {
    async sendLiveApi (params) {
        return await API.post(livePath(), params, {});
    },
    async sendBaseApi (params) {
        console.log(JSON.stringify(params))
        console.log(basePath())
        return await API.post(basePath(), params, {});
    }
};
