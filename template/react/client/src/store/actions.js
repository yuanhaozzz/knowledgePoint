import { TEST } from './actionType'


export function setList (payload) {
    return {
        type: TEST,
        payload
    }
}


export function setTest () {
    return dispatch => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                dispatch(setList({ test: '是是是是' }))
                resolve('你大爷')
            }, 2000);
        })
    }
}