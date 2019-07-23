import { API } from '../api';
import { _path } from '../apiHost';
export const SYSTEM = {
    // 用户相关
    USER: {
        // 登录跳转
        LOGINJUMP: _path('/ucenter/dispatch?action=loginWithPassword'),

        // 发送验证码
        SEND_CODE: _path('/ucenter/dispatch?action=sendUserSms'),

        // 手机号登录
        LOGIN_PHONE: _path('/ucenter/dispatch?action=loginSms'),
    }
};
export default {
    async getUserInfo (params) {
        return await API.post(SYSTEM.USER.LOGINJUMP, params, {});
    },

    async sendCode (params) {
        return await API.post(SYSTEM.USER.SEND_CODE, params, {});
    },

    async getPhoneUserInfo (params) {
        return await API.post(SYSTEM.USER.LOGIN_PHONE, params, {});
    }
};
