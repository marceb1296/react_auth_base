import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces";
import { authApi } from "../services";

const initialState: IUser = {
    user: null,
    isAuthenticated: false,
    expiry: undefined,
    refresh_token: undefined,
    token: undefined
}

const userSlice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                
                state = {
                    ...action.payload,
                    isAuthenticated: true
                }

                return state
            })
            .addMatcher(authApi.endpoints.updateLogin.matchFulfilled, (state, action) => {
                
                state = {
                    ...action.payload,
                    isAuthenticated: true
                }

                return state
            })
            .addMatcher(authApi.endpoints.updateLogin.matchRejected, (state) => {
                
                state = initialState

                return state
            })
            

    },
})

export const { reducer: userReducer } = userSlice;

