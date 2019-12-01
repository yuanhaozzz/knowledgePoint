
import { HOME_TYPE, HOME_QUESTION_LIST } from '../actionType'

// home
let QAType;
export function getQAType (api) {

    let params = {
        action: 'getQAType',
        displayTerminal: 2
    }
    return dispatch => {
        return api.sendBaseApi(params).then(res => {
            QAType = res.questionTypeList
            dispatch(setQAType({ qaHomeList: res.questionTypeList }))
        })
    }
}
export function setQAType (payload) {
    return {
        type: HOME_TYPE,
        payload
    }
}

export function getQaQuestionList (api) {
    let { questionTypeId } = QAType[0].subQuestionTypeVoList[0] ? QAType[0].subQuestionTypeVoList[0] : {};
    let params = {
        action: 'getQaQuestionList',
        questionTypeId,
        pageIndex: 1,
        pageSize: 20,
        displayTerminal: 2
    }
    return dispatch => {
        return api.sendBaseApi(params).then(res => {
            dispatch(setQaQuestionList({ homeQuestionList: res.qaQuestionList }))
        })
    }
}
export function setQaQuestionList (payload) {
    return {
        type: HOME_QUESTION_LIST,
        payload
    }
}