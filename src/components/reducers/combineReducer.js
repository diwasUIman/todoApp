import { combineReducers } from "redux";
import Counter from './counterReducer'

const allReducer = combineReducers({
    _counterReducer : Counter
})

export default allReducer;