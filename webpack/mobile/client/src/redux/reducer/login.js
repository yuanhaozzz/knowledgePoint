import { TEST } from '@/redux/actionTypes';

let initalState = {
    userInfo: {}
};

export default function (state = initalState, actions) {
    let { payload } = actions;
    switch (actions.type) {
        case TEST:
            return {
                ...state,
                ...payload
            };
        default:
            return {
                ...state
            };
    }
}