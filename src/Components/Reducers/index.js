import {combineReducers} from "redux";
import addFavouriteReducers from "./addFavouriteReducers";

export default combineReducers({
    addedMovie:addFavouriteReducers
})