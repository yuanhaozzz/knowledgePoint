
import { SEND_COURSE_DETAIL, LOGIN, SHOW_DIALOG, SELECT_STUDENT, HIDE_DIALOG, TEST } from './actionTypes';

// 课程信息
export function sendCourseDetail (courseData) {
    return {
        type: SEND_COURSE_DETAIL,
        payload: {
            ...courseData
        }
    };
}

// 设置用户信息
export function setUserInfo (userInfo) {
    return {
        type: LOGIN,
        payload: {
            ...userInfo
        }
    };
}

// 显示弹窗
export function showDialog (status) {
    return {
        type: SHOW_DIALOG,
        payload: {
            ...status
        }
    };
}

// 隐藏弹窗
export function hideDialog (status) {
    return {
        type: HIDE_DIALOG,
        payload: {
            ...status
        }
    };
}

// 选中学生
export function setStudent (studentInfo) {
    return {
        type: SELECT_STUDENT,
        payload: {
            ...studentInfo
        }
    };
}

// // 测试
// export function test () {
//     return dispatch => {
//         setTimeout(() => {

//         }, 1000);
//     }
// }

// 测试
export function test (list) {
    return {
        type: 'TEST',
        payload: {
            list
        }
    }
}

export function testAsync (list) {
    return {
        type: 'TEST_ASYNC',
        payload: {
            list
        }
    }
}