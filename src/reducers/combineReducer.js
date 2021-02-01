import { combineReducers } from "redux";
import  countryReducer  from "../reducers/countryReducer";

const allReducer = combineReducers({
  // imported reducer go here
  _dataReducer : countryReducer
})

export default allReducer;