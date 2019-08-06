import { TEST } from '@/redux/actionTypes';

export const test = (data) => {
    return {
        type: TEST,
        payload: data
    };
};

function timeout () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('你姥爷的');
        }, 500);
    });
}

export const asyncTest = () => {
    return dispatch => {
        timeout().then(res => {
            dispatch({
                type: TEST,
                payload: {
                    userInfo: {
                        key: res
                    }
                }
            });
        });
    };
};

