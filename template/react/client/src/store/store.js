import { createStore, applyMiddleware } from 'redux'
import Think from 'redux-thunk'
import Reducer from './reducer/index'

// 客户端store 

export const clientStore = () => {
    // 获取服务端store数据
    let defalutState = window._STATE ? window._STATE : {}
    // 返回实例 防止store共享
    return createStore(Reducer, defalutState, applyMiddleware(Think))
}

exports = function serverStore () {
    // 返回实例 防止store共享
    return createStore(Reducer, applyMiddleware(Think))
}