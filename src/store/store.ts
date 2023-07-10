import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "../reducers";
import { authApi } from "../services/authService";

export const reducer = combineReducers({
    userReducer,
    [authApi.reducerPath]: authApi.reducer
})