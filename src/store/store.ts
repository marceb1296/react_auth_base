import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../services/authService";

export const reducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer
})