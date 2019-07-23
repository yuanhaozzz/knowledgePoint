
import { LOGIN, TEST } from '../actionTypes';

let initialState = {
    userInfo: null,
    list: []
};


export default function (state = initialState, actions) {
    console.log(actions, '===============asdasdas');
    switch (actions.type) {
        case LOGIN:
            // eslint-disable-next-line no-case-declarations
            let { payload } = actions;
            return {
                ...state,
                ...(actions.payload)
            };
        case TEST:
            return {
                ...state,
                ...(actions.payload)
            };
        default:
            return state;
    }
}