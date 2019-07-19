
import { LOGIN, TEST } from '../actionTypes';

let initialState = {
    userInfo: null,
    list: []
};


export default function (state = initialState, actions) {
    switch (actions.type) {
        case LOGIN:
            // eslint-disable-next-line no-case-declarations
            let { payload } = actions;
            return {
                ...state,
                payload
            };
        case TEST:
            return {
                ...state,
                ...actions.payload
            };
        default:
            return state;
    }
}