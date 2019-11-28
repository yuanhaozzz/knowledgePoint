import { TEST, TEST1 } from './actionType'

export function setList (payload) {
    return {
        type: TEST,
        payload
    }
}
export function setList1 (payload) {
    return {
        type: TEST1,
        payload
    }
}

export function setTest () {
    return dispatch => {
        return new Promise((resolve, reject) => {
                dispatch(setList({ test: '是是是是' }))
                resolve()
        })
    }
}
export function setTest1 () {
    return dispatch => {
        return new Promise((resolve, reject) => {
                dispatch(setList1({ test1: '真的？' }))
                resolve()
        })
    }
}