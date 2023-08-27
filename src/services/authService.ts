import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'
import { config } from '../config';
import { ILoginForm, IUser, SignInForm } from '../interfaces';


export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: config.endpoint,
        prepareHeaders: (headers, { getState, endpoint }) => {
            const { isAuthenticated, refresh_token } = (getState() as RootState).userReducer;

            if (isAuthenticated && refresh_token) {
                if (endpoint === "updateLogin") {
                    headers.set(
                        config.refreshTokenHeader,
                        config.keywordRefreshTokenHeader
                            ? `${config.keywordRefreshTokenHeader} ${refresh_token}`
                            : refresh_token
                    );
                }
            }

            return headers.set("Content-Type", "application/json")
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation<IUser, ILoginForm>({
            query({ email, encodedBody, password, username, token }) {

                if (token) {
                    return {
                        url: "",
                        method: "POST",
                        headers: {
                            "Authorization": `${config.keyword} ${token}`
                        }
                    }
                }

                if (encodedBody) {
                    return {
                        url: config.urlLoginForBase64 ?? "",
                        method: "POST",
                        headers: {
                            authorization: "Basic " + encodedBody
                        }
                    }
                }

                let body: ILoginForm = {};

                if (password) body = { ...body, password }
                if (email) body = { ...body, email }
                if (username) body = { ...body, username }

                return {
                    url: config.urlLoginForEmailOrUser ?? "",
                    method: "POST",
                    body,
                }

            }
        }),
        signIn: builder.mutation<IUser, SignInForm>({
            query({ body, encodedBody }) {

                if (encodedBody) {
                    return {
                        url: config.urlSignInForBase64 ?? "sign-in",
                        method: "POST",
                        body
                    }
                }

                return {
                    url: config.urlSignIn ?? "sign-in",
                    method: "POST",
                    body,
                }

            }
        }),
        updateLogin: builder.mutation<IUser, void>({
            query() {
                return {
                    url: config.urlForRefreshToken ?? "login/update",
                    method: "PUT"
                }
            }
        }),
        passwordReset: builder.mutation<void, Record<"email", string>>({
            query(body) {
                return {
                    url: config.urlForPasswordReset ?? "reset-password",
                    method: "POST",
                    body
                }
            }
        })
    })
})

export const { useLoginMutation, useUpdateLoginMutation, usePasswordResetMutation, useSignInMutation } = authApi;