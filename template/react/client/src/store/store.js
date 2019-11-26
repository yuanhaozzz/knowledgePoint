import {createStore, applyMiddleware} from 'redux'
import Think from 'redux-thunk'
import Reducer from './reducer/index'

export default createStore(Reducer, applyMiddleware(Think))