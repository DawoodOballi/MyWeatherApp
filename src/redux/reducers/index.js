import { combineReducers } from "redux";
import cities from "./cityReducer";

const rootReducer = combineReducers({cities});
export default rootReducer;