import {TEST} from './actionType'

export function setTest(payload) {
    return {
        type: TEST,
        payload
    }
}