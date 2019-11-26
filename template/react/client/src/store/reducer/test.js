
import {TEST} from '../actionType'

let defaultData = {
    test: ''
}

export default function (state = defaultData, actions) {
    let {payload, type} = actions
    switch(type) {
        case TEST: 
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

