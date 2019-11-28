
import {TEST, TEST1} from '../actionType'

let defaultData = {
    test: '',
    test1: ''
}

export default function (state = defaultData, actions) {
    let {payload, type} = actions
    switch(type) {
        case TEST: 
            return {
                ...state,
                ...payload
            }
        case TEST1: 
            return {
                ...state,
                ...payload
            }
        default:
            return {
                ...state
            }
    }
}

