import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer/index';



export default createStore(Reducer, applyMiddleware(thunk));