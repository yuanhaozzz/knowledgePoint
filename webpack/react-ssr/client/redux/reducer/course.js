import { SEND_COURSE_DETAIL, SHOW_DIALOG, HIDE_DIALOG, SELECT_STUDENT } from '../actionTypes';

// 定义store 状态
let initialState = {
    courseData: {},
    status: false,
    studentInfo: {}
};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case SEND_COURSE_DETAIL:
            let { payload } = actions;
            return {
                ...state,
                ...payload
            };
        case SHOW_DIALOG:
            console.log(actions.payload);
            return {
                ...state,
                ...actions.payload
            };
        case HIDE_DIALOG:
            return {
                ...state,
                ...actions.payload
            };
        case SELECT_STUDENT:
            return {
                ...state,
                ...actions.payload
            };
        default:
            return state;
    }
}