import {combineReducers} from 'redux'
import projects from './projects'
import auth from './auth'
import users from './users'
export default combineReducers({projects,auth,users})