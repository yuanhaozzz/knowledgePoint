import { HOME_TYPE, HOME_QUESTION_LIST } from '../actionType'

let defaultData = {
    homeType: '',
    homeQuestionList: ''
}

export default function (state = defaultData, actions) {
    let { payload, type } = actions
    switch (type) {
        case HOME_TYPE:
            console.log('HOME_TYPE')
            return {
                ...state,
                ...payload
            }
        case HOME_QUESTION_LIST:
            console.log('HOME_QUESTION_LIST', JSON.stringify(payload))
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

