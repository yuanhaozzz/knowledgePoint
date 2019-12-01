import { HOME_TYPE, HOME_QUESTION_LIST } from '../actionType'

let defaultData = {
    qaHomeList: '',
    homeQuestionList: ''
}

export default function (state = defaultData, actions) {
    let { payload, type } = actions
    switch (type) {
        case HOME_TYPE:
            return {
                ...state,
                ...payload
            }
        case HOME_QUESTION_LIST:
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

