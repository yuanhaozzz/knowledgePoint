import { API } from '../api';
import { _path } from '../apiHost';
export const COURSE = {
    // 课表页
    calendar: {
        // 课表列表
        list: _path('/live/dispatch?action=liveCalendar'),
        // 进入直播间 回调接口
        entryStudio: _path('/live/dispatch?action=callbackNotify'),
    }
};
export default {
    async getList (type, params) {
        return await API.post(COURSE[type].list, params, {});
    },
    async sendStudioCallback (type, params) {
        return await API.post(COURSE[type].entryStudio, params, {});
    }
};
