import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

//we may have more than one reducer functions, so to export them all we use Combine Reducers which wraps them all.
const reducers = combineReducers({
    amount : amountReducer
})

export default reducers;