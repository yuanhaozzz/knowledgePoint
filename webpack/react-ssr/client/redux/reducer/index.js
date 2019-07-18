import { combineReducers } from 'redux';

import course from './course';
import login from './login';

// 整个reducer
export default combineReducers({ course, login });
